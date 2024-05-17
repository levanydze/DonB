import React from "react";
import Link from "next/link";
import styles from "./SocialMedia.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInfo,
  FaGoogle,
  FaRegCircle,
} from "react-icons/fa";
import { socialMediaLinks } from "../../../controlFolder/control";

export default function SocialMedia() {
  return (
    <div>
      {socialMediaLinks.map((links, index) => (
        <div key={index} className={styles.socialMedia}>
          {Object.entries(links).map(([media, url]) => (
            <Link href={url} key={url} target="_blank">
              {media === "instagram" ? (
                <FaInstagram className={styles.socialMediaIcon} />
              ) : media === "facebook" ? (
                <FaFacebook className={styles.socialMediaIcon} />
              ) : media === "linkedin" ? (
                <FaLinkedin className={styles.socialMediaIcon} />
              ) : media === "twitter" ? (
                <FaTwitter className={styles.socialMediaIcon} />
              ) : media === "offerta" ? (
                <FaRegCircle className={styles.socialMediaIcon} />
              ) : media === "google" ? (
                <FaGoogle className={styles.socialMediaIcon} />
              ) : (
                <FaInfo className={styles.socialMediaIcon} />
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
