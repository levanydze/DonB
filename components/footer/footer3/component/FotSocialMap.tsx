import Link from "next/link";
import styles from "./FotSocialMap.module.css";
import { socialMediaLinks } from "../../../../controlFolder/control";

export default function FotSocialMap() {
  return (
    <ul className={styles.ftMap}>
      {socialMediaLinks.map((links, index) => (
        <li key={index} className={styles.socialMedia}>
          {Object.entries(links).map(([media, url]) => (
            <Link href={url} key={url} target="_blank">
              {media}
            </Link>
          ))}
        </li>
      ))}
    </ul>
  );
}
