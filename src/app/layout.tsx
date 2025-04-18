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
    <html lang='ko' className='scroll-smooth dark:bg-navy-dark'>
      <body className={`${inter.className} dark:bg-navy-dark`}>
        <div className='flex min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 max-w-screen-2xl mx-auto bg-white dark:bg-navy-dark'>
          {children}
        </div>
      </body>
    </html>
  );
}
