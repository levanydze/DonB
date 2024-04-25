import styles from "./Chachaweb.module.css";
import TextComponent from "./components/TextComponent";
import ImageComponents from "./components/ImageComponents";
import Image from "next/image";
import imagesJson from "../../../json/images.json";

export default function Chachaweb() {
  const { webBuilding } = imagesJson;
  return (
    <div className="container4">
      <section>
        <div className={styles.chachawebHero2Wrapper}>
          <TextComponent />
          <ImageComponents />
          <div className={styles.background}>
            <div className={styles.overlay}></div>
            <Image src={webBuilding} width={1000} height={1500} alt=""></Image>
          </div>
        </div>
      </section>
    </div>
  );
}
