import Link from 'next/link';
import React from 'react';

const PreviewNav = () => {
  return (
    <>
      <nav className='lg:bg-[#633CFF] relative md:bg-[#633CFF] xl:bg-[#633CFF] text-white w-full h-72 m-0 lg:rounded-b-custom-large sm:rounded-b-custom-large xl:rounded-b-custom-large bg-transparent rounded-none md:bg-transparent md:rounded-none'>
        <header className=" w-full bg-red-400 mx-4">
          <div className='flex absolute w-[98%] rounded-b-custom-largee rounded-t-custom-largee justify-around items-center py-[16px] pl-[24px] pr-[16px] mb-[60px] mt-10 bg-white'>
          <Link
            href="/dev-links"
            className="py-[11px] px-[27px] border border-[#633CFF] text-[#633CFF] rounded-[8px] font-superbold"
          >
            Back to editor
          </Link>
          <Link
            href="#"
            className="py-[11px] px-[27px] rounded-[8px] text-white bg-[#633CFF]"
          >
            Share Link
          </Link>
          </div>
        </header>
      </nav>
    </>
  );
};

export default PreviewNav;
