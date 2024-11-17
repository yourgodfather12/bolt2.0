import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

export const metadata = {
  title: 'Secure Portal',
  description: 'Encrypted communication platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
          storageKey="secure-portal-theme"
        >
          <div className="relative min-h-screen bg-background">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f610,transparent)]" />
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}