import React from "react";
import styles from "./LowerFoot.module.css";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function LowerFoot() {
  return (
    <div className="container2">
      <section className={styles.lowerWrap}>
        <Link href={"https://chachaweb.se"}>
          DESIGNED AND POWERED BY CHACHA.
        </Link>
        <p>&copy; All Rights Reserved</p>
      </section>
    </div>
  );
}
