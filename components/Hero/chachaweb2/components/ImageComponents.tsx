import styles from "./ImageComponents.module.css";
import Image from "next/image";
import imagesJson from "../../../../json/images.json";

export default function ImageComponents() {
  const { QrMenu, photoSceneAbowePasta, responsiveTall, webBuilding } =
    imagesJson;

  return (
    <div className={styles.imgDiv}>
      <div className={styles.imgsOne}>
        <div className={styles.img1}>
          <Image width={500} height={500} alt="12" src={QrMenu}></Image>
        </div>
        <div className={styles.img3}>
          <Image width={500} height={500} alt="12" src={responsiveTall}></Image>
        </div>
      </div>
      <div className={styles.imgsSecond}>
        <div className={styles.img2}>
          <Image width={500} height={500} alt="12" src={webBuilding}></Image>
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
  );
}
