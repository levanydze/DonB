// components/Accordion.tsx
"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";
import { accordionItems } from "./dataAccordion";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container1">
      <section>
        <div>
          <h5 className={`title4 ${styles.headTitle}`}>
            Feequntly Asked Questions
          </h5>
          <div className={styles.accordion}>
            {accordionItems.map((item, index) => (
              <div
                className={`${styles.eachAccordion} ${
                  activeIndex === index ? styles.active : ""
                }`}
                key={index}
                onClick={() => handleClick(index)}
              >
                <div className={styles.head}>
                  <h6 className="title3 ">{item.title}</h6>
                  <span> {activeIndex === index ? "-" : "+"} </span>
                </div>
                <div
                  className={`${styles.content} ${
                    activeIndex === index ? styles.show : styles.hide
                  }`}
                >
                  <p className="text1">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
