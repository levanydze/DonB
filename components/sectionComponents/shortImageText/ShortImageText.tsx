import Image from "next/image";
import styles from "./ShortImageText.module.css";
import Link from "next/link";

interface compProps {
  title: string;
  text: string;
  image: string;
  alt: string;
  reverse?: boolean;
}

export default function ShortImageText({
  image,
  alt,
  title,
  text,
  reverse,
}: compProps) {
  return (
    <div className={` container1 ${styles.background} `}>
      <section>
        <div
          className={`${styles.mainWrapper} ${reverse ? styles.reverse : ""}`}
        >
          <div className={`${styles.imageWrapper} `}>
            <Image src={image} alt={alt} width={500} height={300}></Image>
          </div>
          <div className={styles.textWrapper}>
            <h2 className="title4">{title}</h2>
            <p>{text}</p>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </section>
    </div>
  );
}
