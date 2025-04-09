// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/layout/Header';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SustainaNews - News aligned with UN SDGs',
  description: 'A multilingual smart news summarizer aligned with UN Sustainable Development Goals (SDGs)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

        <Providers>
        <Header />
          {children}
          
      <footer className="border-t py-6 px-4 md:px-6 bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} SustainaNews. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm hover:text-gray-400">
              About
            </Link>
            <Link href="/privacy" className="text-sm hover:text-gray-400">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm hover:text-gray-400">
              Terms
            </Link>
          </div>
        </div>
      </footer>
          </Providers>

      </body>
    </html>
  );
}
