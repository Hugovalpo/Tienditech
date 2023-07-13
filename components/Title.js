import React from "react";
import styles from "../styles/Title.module.css";
import Image from "next/image";
import Link from "next/link";

function Title() {
  return (
    <div className={styles.logoContainer}>
      <Link href="./">
        <img className={styles.logo} src="Logo.png" alt="logo" height="30" />
      </Link>
    </div>
  );
}

export default Title;
