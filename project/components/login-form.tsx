"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Connection error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6">
      <div className="space-y-4 rounded-md">
        <div>
          <Input
            id="username"
            name="username"
            type="text"
            required
            className="bg-black/30 border-border/50 placeholder:text-muted-foreground/50"
            placeholder="Username"
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="bg-black/30 border-border/50 placeholder:text-muted-foreground/50"
            placeholder="Password"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="relative w-full bg-indigo-500 hover:bg-indigo-600 text-white"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Access System"
        )}
      </Button>
    </form>
  );
}