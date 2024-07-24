import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import "./globals.css";
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "link sharing app",
  description: "A web application to create, manage, and share links with a personalized profile.",
};

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <main>
        {children}
        </main>
        </body>
    </html>
  );
};

export default MainLayout;
