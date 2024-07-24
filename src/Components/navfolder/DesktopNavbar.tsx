"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const DesktopNavBar: React.FC = () => {
    const [active, setActive] = useState("links");

    return (
        <div className='flex justify-between items-center'>
            <div className="flex gap-1.5">
                <Image src="/logo.svg" alt="logo" width={32} height={32} />
                <span className="text-[#333333] text-4xl font-bold">devlinks</span>
            </div>

            <div className="flex gap-4">
                <div 
                    onClick={() => setActive("links")} 
                    className={`flex items-center py-3 px-7 gap-2 max-h-[49px] rounded-xl cursor-pointer ${active === "links" ? "bg-[#EFEBFF] text-[#633CFF]" : "text-[#737373]"}`}
                >
                    <Image className="w-5 h-5" src={`${active === "links" ? "/link-active.svg" : "/link.svg"}`} alt="logo" width={20} height={20} />
                    <span className="text-base font-semibold">Links</span>
                </div>
                <div 
                    onClick={() => setActive("profile")} 
                    className={`flex items-center py-3 px-7 gap-2 ${active === "profile" ? "bg-[#EFEBFF] text-[#633CFF]" : "text-[#737373]"} cursor-pointer rounded-xl max-h-[48px]`}
                >
                    <Image className="w-5 h-5" src={`${active === "profile" ? "/user-active.svg" : "/user.svg"}`} alt="logo" width={20} height={20} />
                    <span className="text-base font-semibold">
                        <Link href={'/profile'}>
                            Profile Details
                        </Link>
                    </span>
                </div>
            </div>
            <div className="hidden md:flex py-3 px-7 border-2 rounded-xl border-[#633CFF] max-h-[49px]">
                <span className="text-base text-[#633CFF] font-semibold">
                <Link href={'/preview'}>
                Preview
                </Link>
                </span>
            </div>
        </div>
    );
}

export default DesktopNavBar;
