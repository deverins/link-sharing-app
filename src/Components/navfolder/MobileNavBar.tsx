"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileNavBar: React.FC = () => {
  const [active, setActive] = useState("links");

  return (
    <nav className="flex justify-between items-center py-[16px] mx-6">
      <Link href={'/dev-links'}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={32}
          height={32}
        />
      </Link>
      <div
        onClick={() => setActive("links")}
        className={`rounded-xl cursor-pointer ${active === "links" ? "bg-[#EFEBFF] text-[#633CFF] py-[11px] px-[20px] rounded-[8px]" : "text-[#737373]"}`}
      >
        <Link href="/dev-links">
          <Image
            src={`${active === "links" ? "/link-active.svg" : "/link.svg"}`}
            alt="Link"
            width={21}
            height={20}
          />
        </Link>
      </div>
      <div
        onClick={() => setActive("profile")}
        className={`rounded-xl cursor-pointer ${active === "profile" ? "bg-[#EFEBFF] py-[11px] px-[20px] rounded-[8px] text-[#633CFF]" : "text-[#737373]"}`}
      >
        <Link href="/profile">
          <Image
            src={`${active === "profile" ? "/user-active.svg" : "/user.svg"}`}
            alt="Profile"
            width={21}
            height={20}
          />
        </Link>
      </div>
      <div>
        <Link href="/preview">
          <div
            onClick={() => setActive("preview")}
            className={`py-[11px] px-[16px] border border-[#633CFF] rounded-[8px] cursor-pointer ${active === "preview" ? "border-[#633CFF] text-[#633CFF] bg-[#EFEBFF] " : "border-btnpurple text-btnpurple"}`}
          >
            <Image
              src={`${active === "preview" ? "/eye.svg" : "/eye.svg"}`}
              alt="Preview"
              width={20}
              height={20}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default MobileNavBar;
