import Link from "next/link";
import { companyName } from "../../../controlFolder/control";
import styles from "./Footer.tsx.module.css";
import FotMapping from "./component/FotNavMapping";
import FotSocialMap from "./component/FotSocialMap";
export default function footer() {
  return (
    <footer className="container3">
      <section>
        <div className={styles.mainWrapper}>
          <div className={styles.leftSide}>
            <Link href={"/"} className="title6 font2">
              {companyName}
            </Link>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.footContact}>
              <Link href={"/contact"}>Contact</Link>
            </div>
            <FotMapping />
            <FotSocialMap />
          </div>
        </div>
      </section>
    </footer>
  );
}
