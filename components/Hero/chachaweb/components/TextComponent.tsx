import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCameraRetro,
  faClipboardList,
  faShareAlt,
  faGlobe,
  faPenNib,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TextComponent.module.css";
import Link from "next/link";

export default function TextComponent() {
  return (
    <div className={styles.textWrapper}>
      <h2 className={styles.title1}>What We Do?</h2>
      <div className={styles.sectionWrapper}>
        <h3 className={styles.text1}>
          Website with simple and elegant design
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faGlobe} />
          </div>
        </h3>
        <h3 className={styles.text2}>
          Logo creation
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faPenNib} />
          </div>
        </h3>
        <h3 className={styles.text3}>
          Responsive website
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faMobileAlt} />
          </div>
        </h3>
        <h3 className={`${styles.text4} ${styles.photographer}`}>
          Professional photographer
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faCameraRetro} />
          </div>
        </h3>
        <h3 className={styles.text5}>
          Online content creation
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
        </h3>
        <h3 className={styles.text6}>
          Social media integration
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faShareAlt} />
          </div>
        </h3>
        <h3 className={styles.text7}>
          SEO optimization
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faGlobe} />
          </div>
        </h3>
        <h3 className={styles.text8}>
          Google maps integration
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </div>
        </h3>
      </div>
      <h2 className={styles.title2}>What You Get</h2>
      <h3 className={styles.text9}>Updated website</h3>
      <h3 className={styles.text10}>Continuous support</h3>
      <h3 className={styles.text11}>Custom content that speaks for you</h3>
      <h3 className={styles.text12}>More customers</h3>
      <div className={styles.buttonSectionWrapper}>
        <h2 className={styles.title3}>Ready?</h2>
        <Link
          href={"/contact"}
          className={`button1 ${styles.button} ${styles.text13}`}
        >
          Became a client
        </Link>
      </div>
    </div>
  );
}
