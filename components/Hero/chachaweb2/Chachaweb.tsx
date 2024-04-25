import Link from "next/link";
import Image from "next/image";
import styles from "./Chachaweb.module.css";
import Overlay from "./components/Overlay";
import TextComponent from "./components/TextComponent";
import imagesJson from "../../../json/images.json";

export default function Chachaweb() {
  const { QrMenu, photoSceneAbowePasta, responsiveTall, webBuilding } =
    imagesJson;
  return (
    <div className="container4">
      <section>
        <div className={styles.chachawebHero2Wrapper}>
          <div className={styles.textDiv}>
            <h1 className={`title6 font2 ${styles.mainTitle}`}>
              Web Agency Specializing in
              <br /> Restaurants, Construction and Gardening
            </h1>
            <h2 className={`title3`}>
              Create a modern, easy to navigate website improved by professional
              photography and custom content that truly speaks for you. SEO
              optimization, and Google Maps integration to boost your online
              presence.
            </h2>
            <div className={styles.buttonsDiv}>
              <Link href={"/contact"} className="button2">
                Became a Client
              </Link>
              <Link href={"/contact"} className="button1">
                See Examples
              </Link>
            </div>
          </div>
          <div className={styles.imgDiv}>
            <div className={styles.imgsOne}>
              <div className={styles.img1}>
                <Image width={500} height={500} alt="12" src={QrMenu}></Image>
              </div>
              <div className={styles.img3}>
                <Image
                  width={500}
                  height={500}
                  alt="12"
                  src={responsiveTall}
                ></Image>
              </div>
            </div>
            <div className={styles.imgsSecond}>
              <div className={styles.img2}>
                <Image
                  width={500}
                  height={500}
                  alt="12"
                  src={webBuilding}
                ></Image>
              </div>
              <div className={styles.img4}>
                <Image
                  width={500}
                  height={500}
                  alt="12"
                  src={photoSceneAbowePasta}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
