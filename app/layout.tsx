import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'A full-stack portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="navbar bg-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center p-4">
            <a href="/" className="text-2xl font-bold text-gray-800">Portfolio</a>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="/projects" className="text-gray-600 hover:text-gray-800">Projects</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}