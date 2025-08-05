import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

// Define metadata for the page to improve SEO
export const metadata: Metadata = {
  // Page title
  title: 'webYatra Solutions Hub',
  // Page description
  description: 'Innovative Software Solutions for Your Business Growth',
  // Keywords for search engines
  keywords: ['website development', 'mobile app development', 'AI solutions', 'custom software', 'web design', 'website creation', 'software development company', 'web application development'],
  // Author of the page
  authors: [{ name: 'webYatra Solutions' }],
  // Open Graph metadata for social media sharing
  openGraph: {
    title: 'webYatra Solutions Hub',
    description: 'Innovative Software Solutions for Your Business Growth',
  },
  description: 'Innovative Software Solutions for Your Business Growth',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
