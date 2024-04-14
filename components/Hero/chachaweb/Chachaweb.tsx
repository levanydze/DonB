"use client";
import styles from "./Chachaweb.module.css";
import Link from "next/link";
import TextComponent from "./components/TextComponent";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

interface ImageTextButtonProps {
  title: string;
  text: string;
  button: string;
  image: string;
  buttonValue: string;
}

export default function Chachaweb() {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <div className={`darkGradient ${styles.chachawebHeroWrapper}`}>
      <TextComponent />
      <div className={styles.rightWrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.blueBox}></div>
        <div className={styles.greenBox}></div>
        <div className={styles.orangeBox}></div>
        <div className={`darkGradient2 ${styles.shapeOfBox}`}>
          <Link
            href={"./contact"}
            ref={ref}
            className={`${styles.startButton} ${
              isIntersecting ? styles.activate : ""
            }`}
          >
            START NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
