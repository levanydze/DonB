import Image from "next/image";
import styles from "./PhotoText.module.css";
interface PhotoTextProps {
  title1: string;
  title2: string;
  text: string;
  image: string;
  alt: string;
  reverse?: boolean;
}

export default function PhotoText({
  image,
  alt,
  reverse,
  title1,
  title2,
  text,
}: PhotoTextProps) {
  return (
    <div className={reverse ? "container2" : "container1"}>
      <section>
        <div className={styles.mainWrapper}>
          <div
            className={`${styles.innerWrapper} ${
              reverse ? styles.reverse : ""
            }`}
          >
            <div className={styles.imageDiv}>
              <Image src={image} alt={alt} width={400} height={700}></Image>
            </div>
            <div className={styles.textDiv}>
              <span className="text1">{title1}</span>
              <h3 className="title6">{title2}</h3>
              <p className="text2 ">{text}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
