from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    last_seen = models.DateTimeField(auto_now=True)
    is_online = models.BooleanField(default=False)

    class Meta:
        ordering = ['-date_joined']