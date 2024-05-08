"use client";
import Image from "next/image";
import styles from "./ThreeReviews.module.css";
import { reviews } from "./reviews";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

export default function ThreeReviews() {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <div className="container1">
      <section>
        <div className={styles.reviewsWrapper}>
          <div>
            <p className="text1 textMedium">TESTIMONALS</p>
            <h6 ref={ref} className="title7">
              Client Reviews
            </h6>
          </div>
          <div className={styles.cardsWrapper}>
            {Object.entries(reviews).map(([key, review], index) => (
              <div
                className={`${index === 0 && isIntersecting ? "moveRight" : ""}
                ${index === 2 && isIntersecting ? "moveLeft" : ""}
                ${styles.eachcard}`}
                key={index}
              >
                <Image
                  src={review.image}
                  alt={review.alt}
                  width={200}
                  height={200}
                ></Image>
                <p className={` text1 ${styles.text}`}>{review.text}</p>
                <div>
                  <p className="title3">{review.name}</p>
                  <p className="textMedium">{review.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
