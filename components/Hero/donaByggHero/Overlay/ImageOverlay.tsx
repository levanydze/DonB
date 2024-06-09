import React from "react";
import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "../../../miniComponents/SocialMedia2/SocialMedia";
import infoJson from "../../../../json/info.json";
import Link from "next/link";
// import { companyName } from "../../../../controlFolder/control";

export interface HomePageOverlayProps {
  button1Target: string;
  button1Value: string;
  button2Target?: string | false;
  button2Value?: string | false;
  mainTitle: string;
  text: string;
}

export default function ImageOverlay({
  button1Target,
  button1Value,
  // button2Target,
  // button2Value,
  mainTitle,
  text,
}: HomePageOverlayProps) {
  const { phoneNumber } = infoJson;
  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.empty}></div>
      <div className={styles.middle}>
        <h1 className="title6 font2 moveUp1">{mainTitle}</h1>
        <p className="text1 moveUp3 italic">{text}</p>
        <div className={styles.buttons}>
          <Link href={button1Target} className="moveUp5 button3">
            {button1Value}
          </Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link className={styles.phoneNumber} href={`tel:${phoneNumber}`}>
          <FiPhone className={styles.phoneIcon} />
          {phoneNumber}
        </Link>
        <div className={styles.icons}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
