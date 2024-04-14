import styles from "./Card.module.css";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

interface cardProps {
  title: string;
  text: string;
  index: number;
  category: string;
}
export default function RecProCard({
  title,
  text,
  index,
  category,
}: cardProps) {
  return (
    <div className={styles.mainWrapper}>
      <Link href={"/"} className={styles.overlay}></Link>

      <div className={styles.cardTextDiv}>
        <p className={`textMedium ${styles.numeration}`}>0{index}</p>
        <MdArrowOutward className={styles.arrow} />
        <h3 className="title4">{title}</h3>
        <p className="text1">{text}</p>
      </div>
    </div>
  );
}
