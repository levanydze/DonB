import styles from "./TextComponent.module.css";
import Link from "next/link";

export default function TextComponent() {
  return (
    <div className={styles.textMainWrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.sectionWrapper}>
          <h1 className={styles.title1}>
            Web Agency Specializing in Restaurants, Construction and Gardening
          </h1>
          <ul>
            <li className={styles.text1}>Build custom websites</li>
            <li className={styles.text2}>Design memorable logos</li>
            <li className={styles.text3}>Create mobile friendly web design</li>
            <li className={`${styles.text4} ${styles.photographer}`}>
              Professional Photography to Highlight Your Business
            </li>
            <li className={styles.text5}>Optimize for search engines</li>
            <li className={styles.text6}>Integrate with Google Maps</li>
          </ul>
        </div>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.title2}>What You Get</h2>
          <ul>
            <li className={styles.text7}>Ongoing support</li>
            <li className={styles.text8}>Custom content that speaks for you</li>
          </ul>
        </div>

        <div className={styles.sectionWrapper}>
          <h2 className={styles.title3}>Is This For You?</h2>
          <Link
            href={"/contact"}
            className={`button3 ${styles.button} ${styles.text9}`}
          >
            Become a Client
          </Link>
        </div>
      </div>
    </div>
  );
}
