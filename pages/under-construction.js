import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tanveer's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{ color: "red" }} className={styles.title}>
          Website Under Construction!
        </h1>
        <img
          src="/under-construction.svg"
          alt="Page under construction"
          className={styles.construction}
        />
      </main>

      <footer className={styles.footer}>
        &copy;2021 Tanveer Hossain | All rights reserved
      </footer>
    </div>
  );
}
