import React from "react";
import styles from "./Header2.module.css";
import Navigation from "./components/Navigation";
import BurgerNav from "./components/BurgerNav";
import Logo from "../../../components/miniComponents/Logo/Logo";

export default function Header() {
  return (
    <div className={styles.headWrapper}>
      <Logo />
      <div>
        <Navigation />
        <BurgerNav />
      </div>
    </div>
  );
}
