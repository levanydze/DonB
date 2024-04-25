"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import BurgerNav from "./Navigations/BurgerNav";
import StandartNav from "./Navigations/StandartNav";
import Link from "next/link";
import { companyName } from "@/controlFolder/control";

export interface NavItemProps {
  title: string;
  url: string;
  homePage?: boolean;
  button?: boolean;
}
export interface NavProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div
      className={`${styles.mainWrap} ${isScrolled ? styles.scrolledFix : ""}`}
    >
      <div
        className={`${styles.navigationWrapper} ${
          isScrolled ? styles.marginNull : ""
        } `}
      >
        <Link href={"./"} className={styles.logo}>
          <h3 className="color1 title5 font4" onClick={navClose}>
            <p>{"<"}</p>
            {companyName}
            <p>{"/>"}</p>
          </h3>
        </Link>
        <StandartNav isScrolled={isScrolled} />
        <BurgerNav
          navClose={navClose}
          navToggler={navToggler}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />
      </div>
    </div>
  );
};

export default Navigation;
