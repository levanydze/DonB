"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./ServiceCards.module.css";
import RecProCard from "./components/Card";
import { services } from "./services";
import { ServiceDetailProps } from "./services";

export default function ServiceCards() {
  const [currentCategory, setCurrentCategory] = useState<string>("Restaurant");

  const filteredServices = services[currentCategory] as ServiceDetailProps[];

  return (
    <div className="container1">
      <section>
        <div className={styles.mainWrapper}>
          <div className={styles.textDiv}>
            <h5 className="text1">TECH</h5>
            <h6 className="title8">Services</h6>
          </div>
          <div className={styles.bussinesInputs}>
            {Object.keys(services).map((category, index) => (
              <input
                key={index}
                className={
                  currentCategory === category ? styles.activeCategory : ""
                }
                type="button"
                value={category}
                onClick={() => setCurrentCategory(category)}
              />
            ))}
          </div>
          <div className={styles.cardWrapper}>
            {filteredServices.map((service, index) => (
              <RecProCard
                key={index}
                title={service.title}
                extraTitle={service.extraTitle}
                text={service.text}
                index={index + 1}
                important={service.important}
              />
            ))}
          </div>
          <div className={styles.getCoutBut}>
            <Link className="button3 title3" href="./contact">
              Get A Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
