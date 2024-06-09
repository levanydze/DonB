"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import BurgerNav from "./Navigations/BurgerNav";
import StandartNav from "./Navigations/StandartNav";
import Link from "next/link";
import Image from "next/image";
import imageJson from "../../../json/images.json";
import ReactCountryFlag from "react-country-flag";

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
      <div
        className={`${styles.navigationWrapper} ${
          isScrolled ? styles.marginNull : ""
        } `}
      >
        <Link href={"/se"} className={styles.logo}>
          <Image
            onClick={navClose}
            src={donabyggLogo}
            alt={""}
            width={200}
            height={200}
          ></Image>
        </Link>
        <div className={styles.navRight}>
          <Link href={"/en"} className={styles.language}>
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
            />
          </Link>
          <Link href={"/se/contact"} className={` ${styles.rightButton}`}>
            Få en Offert
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
