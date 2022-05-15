import { signOut } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Sun </title>
        <meta
          name="keywords"
          content="Proiectam, producem si montam sisteme de structuri pentru panouri fotovoltaice, panouri solare, kituri solare, structuri fotovoltaice, montaj panouri soalre, panou fotovoltaic 445 W Solvis, 450 W BauerGermania, 540 W Solvis, Canadian Solar, Eco Delta, EV GO, K2 Systems, Obersen, Sharp, Solvis, Wattrom "
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      
    </div>
  );
}
