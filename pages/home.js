import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";

function Home() {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            alt="Logo theSun"
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
          <HeaderLink />
          <HeaderLink />
          <HeaderLink />
          <HeaderLink />
          </div>
          </div>
      </header>
    </div>
  );
}

export default Home;
