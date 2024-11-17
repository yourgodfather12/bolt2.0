import { LoginForm } from '@/components/login-form';
import { Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-md space-y-8 rounded-2xl border border-border/50 bg-background/20 p-8 backdrop-blur-xl">
        <div className="flex justify-center">
          <div className="rounded-full border border-border/50 bg-background/30 p-3">
            <Terminal className="h-6 w-6 text-indigo-500" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight">
          Secure Access Required
        </h2>
        <LoginForm />
        <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      </div>
    </main>
  );
}