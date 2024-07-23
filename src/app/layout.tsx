import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "link sharing app",
  description: "A web application to create, manage, and share links with a personalized profile.",
};

type MainLayoutProps = {
  children: ReactNode;
};

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* {isAuthenticated() && <Navbar />} */}
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default MainLayout;
