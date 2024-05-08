"use client";
import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import styles from "./SliderPeople.module.css";
import Image from "next/image";

const SliderPeople = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // Auto Slide
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <Fragment>
      <div className="container2">
        <section>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h2 className="title5">Client Reviews</h2>
            </div>
            <div className={styles.sectionCenter}>
              {people.map((person, personIndex) => {
                const { id, image, name, title, quote } = person;
                let position = styles.nextSlide;
                if (personIndex === index) {
                  position = styles.activeSlide;
                }

                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === people.length - 1)
                ) {
                  position = styles.lastSlide;
                }

                return (
                  <div className={` ${styles.article} ${position}`} key={id}>
                    <Image
                      src={image}
                      alt={name}
                      className={styles.personImg}
                      loading="lazy"
                      width={200}
                      height={200}
                    />
                    <h4 className={`title4 color1 ${styles.name}`}>{name}</h4>
                    <p className={` title3 font1 ${styles.title}`}>{title}</p>
                    <p className={` text1 textMedium ${styles.text}`}>
                      {quote}
                    </p>
                    <FaQuoteRight className={` title5 color1 ${styles.icon}`} />
                  </div>
                );
              })}
              <button
                className={`textMedium ${styles.prev}`}
                onClick={() => setIndex(index - 1)}
              >
                <FiChevronLeft />
              </button>
              <button
                className={`textMedium ${styles.next}`}
                onClick={() => setIndex(index + 1)}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SliderPeople;
