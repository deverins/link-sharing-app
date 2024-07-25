"use client";

import CustomDropdown from "@/Components/customDropDown";
import NavBar from "@/Components/navfolder/NavBar";
import Image from "next/image";
import React, { useState } from "react";

interface LinkType {
  platform: string;
  url: string;
}

function DevLinks() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [buttonColor, setButtonColor] = useState("#EFEBFF");
  const [message, setMessage] = useState<string | null>(null);

  const handleAddLink = () => {
    setLinks([...links, { platform: "", url: "" }]);
    setButtonColor("#633CFF");
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
    setButtonColor(updatedLinks.length === 0 ? "#EFEBFF" : "#633CFF");
  };

  const handlePlatformChange = (index: number, value: string) => {
    const updatedLinks = links.map((link, i) =>
      i === index ? { ...link, platform: value } : link
    );
    setLinks(updatedLinks);
  };

  const handleUrlChange = (index: number, value: string) => {
    const updatedLinks = links.map((link, i) =>
      i === index ? { ...link, url: value } : link
    );
    setLinks(updatedLinks);
  };

  const handleSave = () => {
    try {
      localStorage.setItem("userLinks", JSON.stringify(links));
      setMessage("Links saved successfully!");
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage("Failed to save links. Please try again.");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col">
        <main className="flex flex-1 items-center justify-center p-4 md:p-16">
          <div className="w-full max-w-md flex flex-col p-4 bg-white rounded-lg shadow-md md:max-w-3xl">
            <div className="w-full p-6 flex flex-col items-start justify-center rounded-lg">
              <h1 className="text-2xl font-bold leading-9 mb-4">
                Customize your links
              </h1>
              <p className="text-base text-linkPageCustomizeText font-normal leading-6 mb-10">
                Add/edit/remove links below and then share all your profiles with the world!
              </p>

              {message && (
                <div className={`text-base font-medium mb-4 ${message.startsWith("Failed") ? "text-red-600" : "text-green-700 text-bold"}`}>
                  {message}
                </div>
              )}

              <button
                className="w-full flex justify-center gap-2 items-center py-2 px-6 border border-[#633CFF] text-[#633CFF] hover:bg-[#EFEBFF] rounded-lg font-semibold mb-6"
                onClick={handleAddLink}
              >
                + Add new Link
              </button>
              {links.length > 0 ? (
                links.map((link, index) => (
                  <div
                    key={index}
                    className="w-full p-4 mb-4 bg-gray-50 rounded-md shadow-sm flex flex-col gap-4"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-[16px] text-linkGray font-semibold">
                        = Link #{index + 1}
                      </h2>
                      <button
                        className="text-linkGray"
                        onClick={() => handleRemoveLink(index)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] text-linkPageCustomizeText font-normal leading-[18px]">
                        Platform
                      </label>
                      <CustomDropdown
                        value={link.platform}
                        onChange={(value: string) => handlePlatformChange(index, value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] text-linkPageCustomizeText font-normal leading-[18px]">
                        Link
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. https://www.github.com/"
                        className="py-2 px-3 border border-gray-300 rounded-md"
                        value={link.url}
                        onChange={(e) => handleUrlChange(index, e.target.value)}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center w-full max-w-[688px] h-auto">
                  <div className="w-full h-0 relative pb-[50%]">
                  <Image
    src="/started-img.png"
    alt="started"
    fill
    style={{ objectFit: 'contain' }}
    className="rounded-lg"
  />
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-t-1 border-saveborder">
              <div className="flex justify-end md:justify-end">
                <button
                  className={`w-full md:w-auto text-center py-3 px-6 rounded-lg text-white`}
                  style={{ backgroundColor: buttonColor }}
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

export default DevLinks;
