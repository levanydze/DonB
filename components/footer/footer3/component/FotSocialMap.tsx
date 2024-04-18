import Link from "next/link";
import styles from "./FotSocialMap.module.css";
import { socialMediaLinks } from "../../../../controlFolder/control";

export default function FotSocialMap() {
  return (
    <ul className={styles.ftMap}>
      {socialMediaLinks.map((links, index) => (
        <ul key={index} className={styles.socialMedia}>
          {Object.entries(links).map(([media, url]) => (
            <li key={url}>
              <Link href={url} target="_blank">
                {media}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </ul>
  );
}
