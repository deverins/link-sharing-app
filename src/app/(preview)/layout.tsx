
import PreviewNav from '@/Components/preview/PreviewNav';
import { ReactNode } from 'react';

type PreviewLayoutProps = {
  children: ReactNode;
};

const PreviewLayout = ({ children }: PreviewLayoutProps) => {
  return (
    <>
      <main>
        <div className=''>
          <PreviewNav />
        </div>
        <div className="mx-10">
          {children}
        </div>
      </main>
    </>
  );
};

export default PreviewLayout;
