import Image from "next/image";
import React from "react";
import styles from "./HomePageMain.module.css";
import ImageOverlay from "./Overlay/ImageOverlay";
import { HomePageOverlayProps } from "./Overlay/ImageOverlay";

interface HomePageMainProps extends HomePageOverlayProps {
  image: string;
  alt: string;
  outline: boolean;
}

export default function MainImage({
  image,
  alt,
  outline,
  button1Target,
  button1Value,
  button2Target,
  button2Value,
  mainTitle,
  text,
}: HomePageMainProps) {
  return (
    <div
      className={` ${styles.mainWrapper} ${outline ? styles.outline : null}`}
    >
      <ImageOverlay
        button1Target={button1Target}
        button1Value={button1Value}
        button2Target={button2Target}
        button2Value={button2Value}
        mainTitle={mainTitle}
        text={text}
      />
      <div className={styles.imageDarkLayer}></div>
      <Image
        className={styles.mainImage}
        src={image}
        alt={alt}
        width={3000}
        height={2000}
        priority
      />
    </div>
  );
}
