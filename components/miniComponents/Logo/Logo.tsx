import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";
import infoJson from "../../../json/info.json";
import {
  companyLogo,
  companyName,
  underLogo,
} from "../../../controlFolder/control";
import Image from "next/image";

interface LogoProps {
  onClose?: () => void;
}

export default function Logo({ onClose }: LogoProps) {
  const {} = infoJson;
  return (
    <Link href={"/"} onClick={onClose} className={styles.logoWrap}>
      {companyLogo ? (
        <Image
          className={styles.logoImage}
          src={companyLogo}
          height={200}
          width={200}
          alt={companyName + "logo"}
        />
      ) : (
        <p className="title3 font2 color1">{companyName}</p>
      )}
      {underLogo ? (
        <p className={`title2 textLight ${styles.underLogo}`}>{underLogo}</p>
      ) : null}
    </Link>
  );
}
