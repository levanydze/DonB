"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

export default function Header3() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 2300); // Set to true if scrolled more than 50px
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.headWrapper}>
      <Navigation isScrolled={isScrolled} />
    </header>
  );
}
