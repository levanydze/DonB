import styles from "./Card.module.css";
import { MdArrowOutward } from "react-icons/md";
// import Link from "next/link";
import { ServiceDetailProps } from "../services";

interface cardProps extends ServiceDetailProps {
  index: number;
}
export default function RecProCard({
  title,
  text,
  index,
  extraTitle,
  important,
}: cardProps) {
  return (
    <div className={styles.mainWrapper}>
      {/* <Link href={"/"} className={styles.overlay}></Link> */}
      <p className={styles.overlay}></p>

      <div className={styles.cardTextDiv}>
        <p className={`textMedium ${styles.numeration}`}>0{index}</p>
        <MdArrowOutward className={styles.arrow} />
        <h3 className={` title4 ${important ? styles.extraTitle : ""}`}>
          {extraTitle ? (
            <span className={styles.extraTitle}>{extraTitle}</span>
          ) : null}
          {title}
        </h3>
        <p className="text1">{text}</p>
      </div>
    </div>
  );
}
