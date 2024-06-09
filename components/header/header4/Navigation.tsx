"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import BurgerNav from "./Navigations/BurgerNav";
import StandartNav from "./Navigations/StandartNav";
import Link from "next/link";
import { companyName } from "../../../controlFolder/control";
import Image from "next/image";
import imageJson from "../../../json/images.json";

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
  const { donabyggLogo } = imageJson;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const navClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div className={`${styles.mainWrap}`}>
      {/* <div className={styles.blur}></div> */}
      <div
        className={`${styles.navigationWrapper} ${
          isScrolled ? styles.marginNull : ""
        } `}
      >
        <Link href={"/en"} className={styles.logo}>
          <Image
            onClick={navClose}
            src={donabyggLogo}
            alt={""}
            width={200}
            height={200}
          ></Image>
        </Link>
        <div className={styles.navRight}>
          <Link href={"/se"} className={styles.language}>
            SE
          </Link>
          <Link href={"/en/contact"} className={` ${styles.rightButton}`}>
            Get a Quote
          </Link>
        </div>
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
