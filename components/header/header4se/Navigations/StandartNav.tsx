import Link from "next/link";
import styles from "./StandartNav.module.css";
import { navItemsSe } from "../../../../controlFolder/control";
import { usePathname } from "next/navigation";
import { NavProps } from "../Navigation";

export default function StandartNav({ isScrolled }: NavProps) {
  const pathname = usePathname();
  return (
    <nav className={styles.mainNavWrap}>
      <ul
        className={` ${styles.menuBorder} ${styles.noMenuBorder} ${styles.listWrap}`}
      >
        {navItemsSe.map(({ title, homePage, url, button }) => (
          <li key={url}>
            <Link
              key={url}
              className={`${styles.navLink} ${
                pathname === url || (pathname.startsWith(url) && !homePage)
                  ? styles.active
                  : ""
              } ${button ? "button1" : ""}`}
              href={url}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
