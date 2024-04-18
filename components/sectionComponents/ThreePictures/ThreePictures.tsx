import Image from "next/image";
import styles from "./ThreePictures.module.css";

interface ThreePicturesProps {
  image1: string;
  image2: string;
  image3: string;
  alt1: string;
  alt2: string;
  alt3: string;
}
export default function ThreePictures({
  image1,
  image2,
  image3,
  alt1,
  alt2,
  alt3,
}: ThreePicturesProps) {
  return (
    <div className="container2">
      <section>
        <div className={styles.threeWrapper}>
          <Image src={image1} alt={alt1} width={1000} height={1000}></Image>
          <Image src={image2} alt={alt2} width={1400} height={1500}></Image>
          <Image src={image3} alt={alt3} width={1000} height={1000}></Image>
        </div>
      </section>
    </div>
  );
}
