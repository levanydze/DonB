import React from "react";
import Link from "next/link";
import styles from "./SocialMedia.module.css";
import infoJson from "../../../json/info.json";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialMediaLinks } from "../../../controlFolder/control";

export default function SocialMedia() {
  return (
    <div>
      {socialMediaLinks.map((links, index) => (
        <div key={index} className={styles.socialMedia}>
          {Object.entries(links).map(([media, url]) => (
            <Link href={url} target="_blank">
              {media === "instagram" ? (
                <FaInstagram className={styles.socialMediaIcon} />
              ) : null}
              {media === "facebook" ? (
                <FaFacebook className={styles.socialMediaIcon} />
              ) : null}
              {media === "linkedin" ? (
                <FaLinkedin className={styles.socialMediaIcon} />
              ) : null}
              {media === "twitter" ? (
                <FaTwitter className={styles.socialMediaIcon} />
              ) : null}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
