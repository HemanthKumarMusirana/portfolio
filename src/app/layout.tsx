import type { Metadata, Viewport } from 'next';
import { Fira_Code, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "HemanthKumarMusirana's | Portfolio",
  description: 'Portfolio of Musirana Hemanth Kumar — Computer Science Student specializing in AI, Backend Development, Cloud Engineering, and DevOps.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${jetBrainsMono.variable} antialiased font-mono overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
