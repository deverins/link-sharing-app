import React from "react";
import DesktopNavBar from "./DesktopNavbar";
import MobileNavBar from "./MobileNavBar";

const NavBar: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavBar />
      </div>
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
    </>
  );
}

export default NavBar;
