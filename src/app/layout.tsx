import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import "./globals.css";

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
      <body className=''>
        <main>
        {children}
        </main>
        </body>
    </html>
  );
};

export default MainLayout;
