import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CottageIcon from "@mui/icons-material/Cottage";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";

function Home() {
  return (
    <div className="space-y-10 relative">
       <Head>
        <title>The Sun </title>
        <meta
          name="description"
          content="Proiectam, producem si montam sisteme de structuri pentru panouri fotovoltaice, panouri solare, kituri solare, structuri fotovoltaice, montaj panouri soalre, panou fotovoltaic 445 W Solvis, 450 W BauerGermania, 540 W Solvis, Canadian Solar, Eco Delta, EV GO, K2 Systems, Obersen, Sharp, Solvis, Wattrom "
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10 ">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Bun venit la comunitatea intreprinderilor care produc energie de la soare !
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Structuri pentru panouri fotovoltaice</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Produsele noastre</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Structuri si sisteme la comanda</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-16 right-5">
          <Image src="/baner2.png" layout="fill" priority />
        </div>
      </main>
    </div>
  );
}

export default Home;
