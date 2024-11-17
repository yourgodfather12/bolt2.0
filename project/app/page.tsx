'use client'; // Mark this file as a client component

import React, { useState } from 'react';
import LoginForm from '@/components/login-form';
import RegisterForm from '@/components/register-form'; // Import the RegisterForm component
import { Terminal } from 'lucide-react';

export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-md space-y-8 rounded-2xl border border-border/50 bg-background/20 p-8 backdrop-blur-xl">
        <div className="flex justify-center">
          <div className="rounded-full border border-border/50 bg-background/30 p-3">
            <Terminal
              className="h-6 w-6 text-indigo-500"
              aria-label="Secure Access Icon"
            />
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight">
          {isRegistering ? 'Create an Account' : 'Secure Access Required'}
        </h2>

        {/* Conditionally render LoginForm or RegisterForm */}
        {isRegistering ? <RegisterForm /> : <LoginForm />}

        <div className="flex justify-center">
          {!isRegistering ? (
            <button
              className="mt-4 text-indigo-500"
              onClick={handleRegisterClick}
            >
              Don&apos;t have an account? Register here
            </button>
          ) : (
            <button
              className="mt-4 text-indigo-500"
              onClick={() => setIsRegistering(false)}
            >
              Back to Login
            </button>
          )}
        </div>
        <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      </div>
    </main>
  );
}
