import React from "react";
import styles from "./Footer.module.css";
import First from "./fotComponents/First";
import Second from "./fotComponents/Second";
import Third from "./fotComponents/Third";
import Fourth from "./fotComponents/Fourth";
import LowerFoot from "./LowerFoot";

export default function Footer() {
  return (
    <div className={styles.footMainWrapper}>
      <div className={styles.footWrapper}>
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
      <LowerFoot />
    </div>
  );
}
