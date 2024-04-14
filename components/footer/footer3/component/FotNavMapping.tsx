import Link from "next/link";
import styles from "./FotNavMapping.module.css";
import { navItems } from "../../../../controlFolder/control";

export default function FotMapping() {
  return (
    <ul className={styles.ftMap}>
      {navItems.map((item) => (
        <li key={item.title}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
