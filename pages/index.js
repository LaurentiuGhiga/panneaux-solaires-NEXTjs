import Head from "next/head";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>coi </title>
        <meta name="mucea" content="web" />
      </Head> 
      <h1 className={styles.title}>Bine ai venit la panouri solare bre.</h1>
      <p className={styles.description}>Vrei sa cumperi?</p>
      <p className={styles.description}>Cate vrei?</p>
      <p className={styles.description}>Nu vrei, a?</p>
    </div>
  );
}
