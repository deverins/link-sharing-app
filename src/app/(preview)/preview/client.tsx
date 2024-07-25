"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaFreeCodeCamp,
  FaDev,
  FaCode,
} from "react-icons/fa";

const platformIcons = {
  GitHub: <FaGithub style={{ color: "white" }} />,
  LinkedIn: <FaLinkedin style={{ color: "white" }} />,
  Twitter: <FaTwitter style={{ color: "white" }} />,
  Facebook: <FaFacebook style={{ color: "white" }} />,
  YouTube: <FaYoutube style={{ color: "white" }} />,
  freeCodeCamp: <FaFreeCodeCamp style={{ color: "white" }} />,
  "Dev.to": <FaDev style={{ color: "white" }} />,
  Codewars: <FaCode style={{ color: "white" }} />,
};

const platformColors = {
  GitHub: "bg-black",
  LinkedIn: "bg-linkedInColor",
  Twitter: "bg-blue-400",
  Facebook: "bg-blue-800",
  YouTube: "bg-youtubeColor",
  freeCodeCamp: "bg-freeCodeCampColor",
  "Dev.to": "bg-devToColor",
  Codewars: "bg-codeWarColor",
};

type Platform = keyof typeof platformIcons;

interface LinkType {
  platform: Platform;
  url: string;
}

interface UserDetailsType {
  profileImage: string | null;
  firstName: string;
  lastName: string;
  email: string;
  previewImage: string | null;
  links: LinkType[];
}

function PreviewPage() {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    profileImage: null,
    firstName: "",
    lastName: "",
    email: "",
    previewImage: null,
    links: [],
  });

  useEffect(() => {
    const storedDetails = localStorage.getItem("userDetails");
    const storedLinks = localStorage.getItem("userLinks");
    if (storedDetails) {
      setUserDetails((prevState) => ({
        ...prevState,
        ...JSON.parse(storedDetails),
      }));
    }
    if (storedLinks) {
      setUserDetails((prevState) => ({
        ...prevState,
        links: JSON.parse(storedLinks),
      }));
    }
  }, []);

  const { profileImage, firstName, lastName, email, previewImage, links } = userDetails;

  if (!profileImage && !firstName && !lastName && !email && !previewImage) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <main className="w-full h-auto absolute top-56 flex flex-col justify-center items-center gap-[56px]">
        <div className="w-[237px] flex flex-col justify-center items-center bg-white shadow-sm border border-[#f8f6f6] rounded-[24px] py-10 px-2">
          <div className="flex flex-col justify-center items-center mb-[56px] top-0">
            <div className="rounded-full w-[110px] h-[110px] mb-[25px] border border[#633CFF] ">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Profile"
                  className="w-[110px] h-[110px] rounded-full"
                />
              ) : (
                <Image
                  src="/man.svg"
                  alt="man"
                  width="113"
                  height="112"
                  priority
                />

              )}
            </div>
            <h1 className="text-[32px] font-bold leading-[48px] mb-[8px]">
              {firstName} {lastName}
            </h1>
            <p className="text-[16px] text-linkPageCustomizeText font-normal leading-[24px]">
              {email}
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center gap-2 p-4 rounded-lg shadow-md text-white ${platformColors[link.platform]
                  } hover:opacity-90 transition`}
              >
                {platformIcons[link.platform]}
                <span className="mr-auto ">{link.platform}</span>
                <Image
                  src="/arrow-right.svg"
                  alt="Arrow"
                  width="16"
                  height="16"
                />
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PreviewPage;