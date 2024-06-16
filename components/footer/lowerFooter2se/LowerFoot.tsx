import React from "react";
import styles from "./LowerFoot.module.css";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { companyFullName } from "../../../controlFolder/control";

export default function LowerFoot() {
  return (
    <div className="container2">
      <section>
        <div className={styles.lowerWrap}>
          <Link href={"https://chachaweb.se"}>
            DESIGNED AND POWERED BY CHACHA AB
          </Link>
          <p>Alla rättigheter förbehållna &copy; {companyFullName} </p>
        </div>
      </section>
    </div>
  );
}
