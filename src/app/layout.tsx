import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jin Lee - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className='scroll-smooth'>
      <body className={inter.className}>
        <div className='flex min-h-screen bg-white dark:bg-gray-900'>{children}</div>
      </body>
    </html>
  );
}
