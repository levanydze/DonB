"use client";
import Link from "next/link";
import styles from "./ServiceCards.module.css";
import RecProCard from "./components/Card";
import { services, categories } from "./services";
import { useState } from "react";
export default function ServiceCards() {
  const [currentCategory, setCurentCategory] = useState<string>("Restaurant");
  const handleCategory = (category: string) => {
    setCurentCategory(category);
  };
  const filteredServices = services.filter(
    (service) =>
      currentCategory === "" || service.category.includes(currentCategory)
  );
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.textDiv}>
          <h5 className="text1">TECH</h5>
          <h6 className="title8">Services</h6>
        </div>
        <div className={styles.bussinesInputs}>
          {categories.map((category) => (
            <input
              key={category}
              className={
                currentCategory === category ? styles.activeCategory : ""
              }
              type="button"
              value={category}
              onClick={() => handleCategory(category)}
            />
          ))}
        </div>
        <div className={styles.cardWrapper}>
          {filteredServices.map((service, index) => (
            <RecProCard
              key={index}
              title={service.title}
              text={service.text}
              index={index + 1}
              category={currentCategory}
            />
          ))}
        </div>
        <div className={styles.getCoutBut}>
          <Link className="button3 title3" href={"./contact"}>
            Get A Coute
          </Link>
        </div>
      </div>
    </div>
  );
}
