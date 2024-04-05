import React from "react";
import styles from "./First.module.css";
import SocialMedia from "../../../../components/miniComponents/SocialMedia/SocialMedia";
import infoJson from "../../../../json/info.json";
import Link from "next/link";

export default function First() {
  const { address, email, phoneNumber } = infoJson;
  return (
    <section>
      <h2 className="title3">Contact info</h2>
      <address className={styles.contactInfo}>
        <p>{address}</p>
        <Link href={`mailto:${email}`} className={styles.email}>
          {email}
        </Link>
        <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
      </address>
      <SocialMedia />
    </section>
  );
}
