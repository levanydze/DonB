"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Logo from "../../miniComponents/Logo/Logo";
import BurgerNav from "./Navigations/BurgerNav";
import StandartNav from "./Navigations/StandartNav";
import Link from "next/link";

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

  return (
    <div className={styles.navigationWrapper}>
      <Link href={"./"}>
        <h3 className="color1 title5" onClick={navClose}>
          <p>{"<"}</p>
          ChaCha
          <p>{"/>"}</p>
        </h3>
      </Link>
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
