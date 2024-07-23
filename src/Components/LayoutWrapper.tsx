'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/Components/Navbar';
import MainLayout from '@/app/layout';

type LayoutWrapperProps = {
  children: ReactNode;
};

// const isAuthenticated = () => {
//   return !!localStorage.getItem('authToken');
// };

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();
  const [isPreviewPage, setIsPreviewPage] = useState(false);

  useEffect(() => {
    setIsPreviewPage(pathname.startsWith('/preview'));
  }, [pathname]);

  return (
    <MainLayout>
      {!isPreviewPage && <Navbar />}
      {/* {!isPreviewPage && isAuthenticated() && <Navbar />} */}
      {children}
    </MainLayout>
  );
};

export default LayoutWrapper;
