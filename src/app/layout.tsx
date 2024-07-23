import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import "./globals.css";
import { Instrument_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

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
    <html lang="en" className={instrumentSans.className}>
      <body className="flex flex-col min-h-screen">
        <Suspense>{children}</Suspense>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
};

export default MainLayout;
