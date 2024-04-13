import Link from "next/link";
import styles from "./SocialMedia.module.css";
import { socialMediaLinks } from "../../../controlFolder/control";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div>
      {socialMediaLinks.map((links, index) => (
        <div key={index} className={styles.mediaWrapper}>
          {Object.entries(links).map(([media, url]) => (
            <Link href={url} key={url}>
              {media === "instagram" ? <FaInstagram /> : null}
              {media === "facebook" ? <FaFacebook /> : null}
              {media === "linkedin" ? <FaLinkedin /> : null}
              {media === "twitter" ? <FaTwitter /> : null}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
