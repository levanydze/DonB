import Image from "next/image";
import styles from "./RecProCard.module.css";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function RecProCard() {
  return (
    <div className={styles.mainWrapper}>
      <Link href={"/"} className={styles.overlay}></Link>
      <div className={styles.imageDiv}>
        <Image
          src="https://raw.githubusercontent.com/levanydze/SUP/main/Cha/DALL%C2%B7E%202024-04-13%2023.25.00%20-%20Design%20a%20dark%20digital%20abstract%20background%20that%20conveys%20a%20sense%20of%20advanced%20technology%20and%20modernity.%20The%20background%20should%20include%20elements%20such%20as%20ci.webp"
          alt="s"
          width={700}
          height={500}
        ></Image>
      </div>
      <div className={styles.cardTextDiv}>
        <MdArrowOutward className={styles.arrow} />
        <p className="text1"> BRANDING</p>
        <h3 className="title4">Website and Content Creation</h3>
      </div>
    </div>
  );
}
