import React from "react";
import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "../../../miniComponents/SocialMedia2/SocialMedia";
import Button1 from "../../../Buttons/Button1";
import infoJson from "../../../../json/info.json";
import Link from "next/link";

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
  button2Target,
  button2Value,
  mainTitle,
  text,
}: HomePageOverlayProps) {
  const { phoneNumber, name } = infoJson;
  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.empty}></div>
      <div className={styles.middle}>
        <h2 className="title6 color1 font3">Welcome to</h2>
        <h1 className="title6 font2 ">{mainTitle}</h1>
        <h2 className="title10 font2">{name}</h2>
        <div className="twoLines "></div>
        <p className="text1">{text}</p>
        <div className={styles.buttons}>
          <Button1
            value={button1Value}
            styling="button1"
            target={button1Target}
          />
          {button2Value && button2Target ? (
            <Button1
              value={button2Value}
              styling="button2"
              target={button2Target}
            />
          ) : null}
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
