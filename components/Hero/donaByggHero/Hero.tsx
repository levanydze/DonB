import Image from "next/image";
import styles from "./Hero.module.css";
import ImageOverlay from "./Overlay/ImageOverlay";
import imagesJson from "../../../json/images.json";

interface HomePageMainProps {
  outline?: boolean;
  overlay?: boolean;
  button1Target: string;
  button1Value: string;
  mainTitle: string;
  text: string;
}

export default function Hero({
  outline,
  overlay,
  button1Target,
  button1Value,
  mainTitle,
  text,
}: HomePageMainProps) {
  const { headImage } = imagesJson;
  return (
    <div
      className={` ${styles.mainWrapper} ${outline ? styles.outline : null}`}
    >
      <ImageOverlay
        button1Target={button1Target}
        button1Value={button1Value}
        mainTitle={mainTitle}
        text={text}
      />
      {overlay ? <div className={styles.imageDarkLayer}></div> : null}
      <Image
        className={styles.mainImage}
        src={headImage}
        width={3000}
        height={2000}
        alt="clouds"
        priority
      ></Image>
    </div>
  );
}
