import { AnimatePresence } from "framer-motion";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import { connectToDatabase } from "../util/mongodb";

export default function Home(posts) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const router = useRouter;
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

      <main className="flex gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          <Feed posts={posts} />
        </div>
        {/*Widgets */}
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
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

  //Get posts on SSR
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find()
    .sort({ timestamp: -1 })
    .toArray();

  //Get Google News API
  return {
    props: {
      session,
      posts: posts.map((post) => ({
        _id: post._id.toString(),
        input: post.input,
        photoUrl: post.photoUrl,
        username: post.username,
        email: post.email,
        userImg: post.userImg,
        createdAt: post.createdAt,
      })),
    },
  };
  console.log(posts);
}
