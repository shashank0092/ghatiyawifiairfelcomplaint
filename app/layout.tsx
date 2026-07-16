import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Ghatiya Airfel WiFi Speed',
  description: 'India\'s Unofficial Complaint Desk for Airfel WiFi users. Share your frustration anonymously.',
  openGraph: {
    title: 'Ghatiya Airfel WiFi Speed',
    description: 'India\'s Unofficial Complaint Desk for Airfel WiFi users. Share your frustration anonymously.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghatiya Airfel WiFi Speed',
    description: 'India\'s Unofficial Complaint Desk for Airfel WiFi users. Share your frustration anonymously.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
