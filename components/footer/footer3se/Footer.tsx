import Link from "next/link";
import imagesJson from "../../../json/images.json";
import styles from "./Footer.tsx.module.css";
import FotMapping from "./component/FotNavMapping";
import FotSocialMap from "./component/FotSocialMap";
import Image from "next/image";

export default function footer() {
  const { donabyggLogo } = imagesJson;
  return (
    <footer className="container2">
      <section>
        <div className={styles.mainWrapper}>
          <div className={styles.leftSide}>
            <Link href={"/se"} className={styles.logo}>
              <Image src={donabyggLogo} alt="" height={300} width={300}></Image>
            </Link>
          </div>
          <div className={styles.contactInfo}></div>
          <div className={styles.rightSide}>
            <div className={styles.footContact}>
              <Link href={"se/contact"}>Kontakt</Link>
            </div>
            <FotMapping />
            <FotSocialMap />
          </div>
        </div>
      </section>
    </footer>
  );
}
