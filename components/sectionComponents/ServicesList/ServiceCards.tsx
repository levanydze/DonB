"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./ServiceCards.module.css";
import RecProCard from "./components/Card";
import { services } from "./services";
import { ServiceDetailProps } from "./services";

interface ServiceCardsProps {
  serviceCat?: string | null;
  arrayEmaunt: number;
}

export default function ServiceCards({
  serviceCat,
  arrayEmaunt,
}: ServiceCardsProps) {
  // const [currentCategory, setCurrentCategory] = useState<string>("Restaurant");

  // const filteredServices = services[serviceCat] as ServiceDetailProps[];
  const filteredServices = serviceCat
    ? (services[serviceCat] as ServiceDetailProps[])
    : [];

  return (
    <div className="container1">
      <section>
        <div className={styles.mainWrapper}>
          <div className={styles.textDiv}>
            <h5 className="text1">TECH</h5>
            <h6 className="title8">
              {serviceCat !== "Other" ? serviceCat : ""} Services
            </h6>
          </div>
          {/* <div className={styles.caregory}>
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
          </div> */}
          <div className={styles.cardWrapper}>
            {filteredServices.slice(0, arrayEmaunt).map((service, index) => (
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
            {arrayEmaunt < 4 ? (
              <Link className="button3 title3" href="./services">
                View All Services
              </Link>
            ) : (
              <Link className="button3 title3" href="./contact">
                Get in touch
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
