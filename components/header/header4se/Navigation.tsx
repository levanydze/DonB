"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.css";
import BurgerNav from "./Navigations/BurgerNav";
import StandartNav from "./Navigations/StandartNav";
import Link from "next/link";
import Image from "next/image";
import imageJson from "../../../json/images.json";
import { companyFullName } from "@/controlFolder/control";

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

  //language
  const [en, setEn] = useState(Boolean);
  const [se, setSe] = useState(Boolean);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage === "en") {
      setEn(true);
      setSe(false);
      window.location.href = "/en";
    } else if (selectedLanguage === "se") {
      setEn(false);
      setSe(true);
      window.location.href = "/se";
    }
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
            alt={companyFullName}
            width={200}
            height={200}
          ></Image>
        </Link>
        <div className={styles.navRight}>
          <select
            onChange={handleChange}
            className={styles.language}
            defaultValue=""
          >
            <option value="se">SE</option>
            <option value="en">EN</option>
          </select>

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
