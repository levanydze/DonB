import React from "react";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

export default function Header3() {
  return (
    <header className={styles.headWrapper}>
      <Navigation />
    </header>
  );
}
