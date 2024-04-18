import styles from "./TextComponent.module.css";
import Link from "next/link";

export default function TextComponent() {
  return (
    // <div className="container1">
    <div className={styles.textMainWrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.title1}>What We Do?</h2>
          <h1 className={styles.text1}>We build websites</h1>
          <h3 className={styles.text2}>We create logo</h3>
          <h3 className={styles.text3}>We make responsive design</h3>
          <h3 className={`${styles.text4} ${styles.photographer}`}>
            We do professional photography
          </h3>
          <h3 className={styles.text5}>We make SEO optimization</h3>
          <h3 className={styles.text6}>We do Google maps integration</h3>
        </div>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.title2}>What You Get</h2>
          <h3 className={styles.text7}>Continuous support</h3>
          <h3 className={styles.text8}>Custom content that speaks for you</h3>
        </div>

        <div className={styles.sectionWrapper}>
          <h2 className={styles.title3}>Ready?</h2>
          <Link
            href={"/contact"}
            className={`button1 ${styles.button} ${styles.text9}`}
          >
            Became a client
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}
