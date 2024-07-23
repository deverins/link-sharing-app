
import PreviewNav from '@/Components/preview/PreviewNav';
import { ReactNode } from 'react';

type PreviewLayoutProps = {
  children: ReactNode;
};

const PreviewLayout = ({ children }: PreviewLayoutProps) => {
  return (
    <>
      <main>
        <div>
          <PreviewNav />
        </div>
        <div className="flex-grow container mx-auto p-4">
          {children}
        </div>
      </main>
    </>
  );
};

export default PreviewLayout;
