import Image from "next/image";
import styles from "./ShortImageText.module.css";

interface compProps {
  image: string;
  alt: string;
}

export default function ShortImageText({ image, alt }: compProps) {
  return (
    <div className={` ${styles.mainWrapper} `}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={alt} width={500} height={400}></Image>
      </div>
      <div className={styles.textWrapper}>
        <h2 className="title4">
          Websites That Provides Best Practice in Any Devices
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, minus
          eveniet, iste id officia, voluptates expedita aliquid sit laudantium
          nisi illum recusandae eligendi molestias aut dolor vitae deleniti
          dolorum ea.
        </p>
        <h6 className="button1">Wanna Have One?</h6>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}
