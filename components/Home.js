import styles from "../styles/Home.module.css";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Brands from "./Brands";
import FreeShipping from "./FreeShipping";
import RefundFree from "./RefundFree";

function Home() {
  return (
      <main className={styles.main}>
        <Brands/>
        <FreeShipping/>
        <RefundFree/>
      </main>
  );
}

export default Home;
