import React from "react";
import styles from "./ImageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocialMedia from "../../../miniComponents/SocialMedia2/SocialMedia";
import Button1 from "../../../Buttons/Button1";
import infoJson from "../../../../json/info.json";
import Link from "next/link";

export default function ImageOverlay() {
  const { phoneNumber, name } = infoJson;
  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.empty}></div>
      <div className={styles.middle}>
        <h2 className="title6 color1 font3">Welcome to</h2>
        <h1 className="title6 font2 ">
          The Best Georgian Restaurant In Stockholm
        </h1>
        <h2 className="title10 font2">{name}</h2>
        <div className="twoLines "></div>
        <p className="text1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos optio
          earum reiciendis placeat quis iusto doloremque facere eaque. Deleniti
          corrupti fugiat nesciunt dolore officia aperiam ipsam accusantium,
          debitis nisi unde?
        </p>
        <div className={styles.buttons}>
          <Button1
            value="Book a Table"
            styling="button1"
            target="/reservation"
          />
          <Button1 value="View Menu" styling="button2" target="/menu" />
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
