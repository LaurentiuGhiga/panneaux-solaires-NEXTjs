import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const router = useRouter
  const { staus } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authentificated, handle it here
      router.push("/home");
    },
  });
  return (
    <div className="bg-[#F3F2EF dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | The Sun </title>
        <meta
          name="keywords"
          content="Proiectam, producem si montam sisteme de structuri pentru panouri fotovoltaice, panouri solare, kituri solare, structuri fotovoltaice, montaj panouri soalre, panou fotovoltaic 445 W Solvis, 450 W BauerGermania, 540 W Solvis, Canadian Solar, Eco Delta, EV GO, K2 Systems, Obersen, Sharp, Solvis, Wattrom "
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          <Feed />
        </div>
        {/*Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Check if the user is authentificated on the server
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
