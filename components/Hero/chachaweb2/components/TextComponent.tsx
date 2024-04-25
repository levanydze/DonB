import styles from "./TextComponent.module.css";
import Link from "next/link";

export default function TextComponent() {
  return (
    <div className={styles.textDiv}>
      <h1 className={`title6 font2 moveUp1 ${styles.mainTitle}`}>
        Web Agency Specializing in
        <br className={styles.br} /> Restaurants, Construction and Gardening
      </h1>
      <h2 className={`title3 moveUp2`}>
        Create a modern, easy to navigate website improved by professional
        photography and custom content that truly speaks for you. SEO
        optimization, and Google Maps integration to boost your online presence.
      </h2>
      <div className={styles.buttonsDiv}>
        <Link href={"/contact"} className="button2 moveUp3">
          Became a Client
        </Link>
        <Link href={"/websites"} className={`button3 moveUp5`}>
          Example Websites
        </Link>
      </div>
    </div>
  );
}
