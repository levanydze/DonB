"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Logo from "../../../components/miniComponents/Logo/Logo";
import BurgerNav from "./Navigations/BurgerNav";
import StandartNav from "./Navigations/StandartNav";

export interface NavItemProps {
  title: string;
  url: string;
  homePage?: boolean;
  button?: boolean;
}

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };
  //d
  return (
    <div className={styles.navigationWrapper}>
      <Logo onClose={navClose} />
      <StandartNav />
      <BurgerNav
        navClose={navClose}
        navToggler={navToggler}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </div>
  );
};

export default Navigation;
