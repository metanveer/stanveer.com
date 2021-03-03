import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tanveer's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Test</main>

      <footer className={styles.footer}>
        &copy;2021 Tanveer Hossain | All rights reserved
      </footer>
    </div>
  );
}
