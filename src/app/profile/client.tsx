"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBar from "../../Components/navfolder/NavBar";

const ProfileDetails = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [buttonWidth, setButtonWidth] = useState<string>("w-full");
  const router = useRouter();

  useEffect(() => {
    // Update button width based on window size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setButtonWidth("w-full");
      } else {
        setButtonWidth("w-auto");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (firstName || lastName || email || profileImage) {
      const userDetails = {
        profileImage,
        firstName,
        lastName,
        email,
        previewImage,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      setFirstName("");
      setLastName("");
      setEmail("");
      setProfileImage(null);
      setPreviewImage(null);
      router.push("/preview");
    }
  };

  return (
    <>
      <div>
        <NavBar />
        <main className="p-[16px]">
          <div className="p-[24px] w-full max-w-md mx-auto flex flex-col md:max-w-3xl">
            <h1 className="text-[14px] xl:text-[24px] md:text-[20px] lg:text-[24px] sm:text-[18px] font-bold leading-[36px]">
              Profile Details
            </h1>
            <p className="text-[16px] text-linkPageCustomizeText font-normal leading-[24px] mb-[40px]">
              Add your details to create a personal touch to your profile.
            </p>
            <div className="bg-[#FAFAFA] p-2 w-full max-w-md mx-auto flex flex-col rounded-lg shadow-md md:max-w-3xl">
              <div className="p-[20px] bg-bgColor mb-[24px] flex flex-wrap justify-between">
                <p className="text-[16px] font-normal leading-[24px] mb-[40px]">
                  Profile picture
                </p>

                <div className="profilePicture mb-[16px]">
                  {previewImage ? (
                    <img
                      src={previewImage as string}
                      alt="Profile Preview"
                      className="rounded-full w-[104px] h-[104px] object-cover"
                    />
                  ) : (
                    <div
                      className="rounded-md w-[193px] h-[193px] flex flex-col bg-[#EFEBFF] items-center justify-center cursor-pointer"
                      onClick={() => document.getElementById("profileImageInput")?.click()}
                    >
                      <Image
                        src="/uploadImage.svg"
                        alt="Upload Image"
                        width="40"
                        height="40"
                      />
                      <p className="uploadTheImage text-[#633CFF]">+ Upload Image</p>
                    </div>
                  )}
                  <div className="flex">
                    <input
                      type="file"
                      accept="image/*"
                      id="profileImageInput"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="text-[12px] text-linkPageCustomizeText font-normal leading-[18px] mb-[40px]">
                      Image must be below 1024x1024px. Use PNG or JPG format.
                    </div>
                  </div>
                </div>
              </div>

              <form className="p-5 bg-bgColor w-full mb-[25px]">
                <div className="flex flex-col gap-1 mb-3">
                  <label
                    htmlFor="firstName"
                    className="text-[12px] text-linkPageCustomizeText font-normal leading-[18px]"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="py-[12px] px-[16px] border border-gray-300 rounded-md"
                    placeholder="Ben"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                  <label
                    htmlFor="lastName"
                    className="text-[12px] text-linkPageCustomizeText font-normal leading-[18px]"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="py-[12px] px-[16px] border border-gray-300 rounded-md"
                    placeholder="Wright"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 mb-3">
                  <label
                    htmlFor="email"
                    className="text-[12px] text-linkPageCustomizeText font-normal leading-[18px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="py-[12px] px-[16px] border border-gray-300 rounded-md"
                    placeholder="ben@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="p-4 border-t border-t-1 border-saveborder">
              <div className="flex justify-end md:justify-end">
                <button
                  type="button"
                  className={`font-semibold py-[11px] px-[27px] bg-[#633CFF] text-white rounded-md ${buttonWidth}`}
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProfileDetails;
