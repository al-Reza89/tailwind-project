import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Collection from "../components/Collection";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Slide from "../components/Slide";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className=" bg-local bg-[url('../public/assets/homepage.jpg')] ">
          <Navbar />
          <Searchbar />
        </div>
        <Slide />
        <Card />
        <Collection />
      </div>
    </div>
  );
}
