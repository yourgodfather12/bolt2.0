import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Message

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope["user"]
        if not self.user.is_authenticated:
            await self.close()
            return
        
        await self.channel_layer.group_add(
            f"user_{self.user.id}",
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            f"user_{self.user.id}",
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        recipient_id = data['recipient_id']

        # Save message to database
        await self.save_message(message, recipient_id)

        # Send message to recipient
        await self.channel_layer.group_send(
            f"user_{recipient_id}",
            {
                "type": "chat.message",
                "message": message,
                "sender_id": self.user.id
            }
        )

    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            "message": event["message"],
            "sender_id": event["sender_id"]
        }))

    @database_sync_to_async
    def save_message(self, content, recipient_id):
        Message.objects.create(
            sender=self.user,
            recipient_id=recipient_id,
            content=content
        )