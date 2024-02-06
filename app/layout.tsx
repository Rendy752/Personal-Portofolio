import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ThemeContextProvider from '@/context/theme_context';
import ActiveSectionContextProvider from '@/context/active_section_context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rendy Pratama | Personal Portofolio',
  description: 'Rendy Pratama is a student in Multi Data Palembang University',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-violet-200 absolute top-[-6rem] -z-10 right-[11rem] h-[60rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-violet-100 absolute top-[-4rem] -z-10 right-[65rem] h-[60rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-blue-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[60rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
