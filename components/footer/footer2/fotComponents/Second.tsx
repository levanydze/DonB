import React from "react";
import styles from "./Second.module.css";
import Link from "next/link";
import { navItems } from "../../../../controlFolder/control";

export default function Second() {
  return (
    <section>
      <h2 className="title3">Navigation</h2>

      <div className={styles.menuWrap}>
        {navItems.map((nav, index) => (
          <Link className={styles.menu} href={nav.url} key={nav.url}>
            {nav.title}
            {nav.title === "MENU" ? <p className="updated">updated</p> : ""}
          </Link>
        ))}
      </div>
    </section>
  );
}
