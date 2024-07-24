import React from "react";
import DesktopNavBar from "./DesktopNavbar";
import MobileNavBar from "./MobileNavBar";

const NavBar: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <nav className='sticky top-0 items-center bg-white '>
          <header className="border border-[#FFFF] shadow rounded-xl mt-11 p-6">
            <DesktopNavBar />
          </header>
        </nav>
      </div>
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
    </>
  );
}

export default NavBar;
