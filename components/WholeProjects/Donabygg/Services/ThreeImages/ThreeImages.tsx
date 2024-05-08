"use client";
import Image from "next/image";
import styles from "./ThreeImages.module.css";
import imagesJson from "../../../../../json/images.json";
import Link from "next/link";
import { useIntersectionObserver } from "../../../../../hooks/useIntersectionObserver";

export default function ThreeImages() {
  const { headImage, QrMenu, webBuilding } = imagesJson;
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <div className="container2">
      <section>
        <div className={styles.threeMainWrapper}>
          <span className="text1 textMedium"> Your choice</span>
          <p className="title4" ref={ref}>
            Our Services
          </p>
          <div className={styles.cardsWrapper}>
            <div
              className={`${isIntersecting ? "moveUp1" : ""} ${
                styles.imageDiv
              }`}
            >
              <Link href={"./"}></Link>
              <div className={styles.textDiv}>
                <p className="text1"> Order the collection</p>
                <h3 className="title3">Coffee Tables</h3>
              </div>
              <Image src={QrMenu} width={800} height={1000} alt=""></Image>
            </div>
          </div>
          <div className={styles.buttonDiv}>
            {/* arrayNumber < 99 */}
            <Link href={"/services"} className="button3">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
