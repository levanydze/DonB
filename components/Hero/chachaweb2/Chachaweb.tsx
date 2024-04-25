import Link from "next/link";
import styles from "./Chachaweb.module.css";
import Overlay from "./components/ImageComponents";
import TextComponent from "./components/TextComponent";
import ImageComponents from "./components/ImageComponents";

export default function Chachaweb() {
  return (
    <div className="container4">
      <section>
        <div className={styles.chachawebHero2Wrapper}>
          <TextComponent />
          <ImageComponents />
        </div>
      </section>
    </div>
  );
}
