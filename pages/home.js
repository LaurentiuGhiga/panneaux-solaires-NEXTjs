import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CottageIcon from "@mui/icons-material/Cottage";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

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
            <HeaderLink Icon={CottageIcon} text="Acasa" />
            <HeaderLink Icon={OndemandVideoIcon} text="Despre Noi" />
            <HeaderLink Icon={SolarPowerIcon} text="Sisteme Solare" />
            <HeaderLink Icon={AddIcCallIcon} text="Contact" />
          </div>
          <div className="pl-4">
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
            Sign in
          </button>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default Home;
