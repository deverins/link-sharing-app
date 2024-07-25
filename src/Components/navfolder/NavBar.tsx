"use client"
import React, { useEffect, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavbar";

const NavBar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="hidden md:block">
        <nav className='sticky top-0 items-center bg-white'>
          <header className="border border-[#FFFF] shadow rounded-xl mt-11 mx-10 p-6">
            <DesktopNavBar />
          </header>
        </nav>
      </div>
      <div className="block md:hidden mx-0">
        <MobileNavBar />
      </div>
    </>
  );
}

export default NavBar;
