import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

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
          <HeaderLink Icon={ExploreIcon} text="Discover"/>
          <HeaderLink Icon={GroupIcon} text="People"/>
          <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning"/>
          <HeaderLink Icon={BusinessCenterIcon} text="Jobs"/>
          </div>
          </div>
      </header>
    </div>
  );
}

export default Home;
