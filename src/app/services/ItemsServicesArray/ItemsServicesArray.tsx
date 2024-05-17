import React from "react";
import styles from "./ItemsServicesArray.module.css";
import { fetchData } from "../DataFetch";
import Image from "next/image";
import Link from "next/link";

export interface ProjectProps {
  id: string;
  text: string;
  link: string;
  title: string;
  mainImage: string;
  images: string[];
  alt: string;
  description: string;
  [key: string]: any;
}

interface ItemsArrayProps {
  title: string;
  span: string;
  arrayNumber: number;
}

export default async function ItemsServicesArray({
  title,
  span,
  arrayNumber,
}: ItemsArrayProps) {
  const data: ProjectProps[] = await fetchData();

  return (
    <div className="container2">
      <section>
        <div className={`${styles.threeMainWrapper}`}>
          <span className="text1 textMedium">{span}</span>
          <p className="title4">{title}</p>
          <div className={styles.cardsWrapper}>
            {data.slice(0, arrayNumber).map((project) => (
              <div className={styles.imageDiv} key={project.id}>
                <Link href={`/services/${project.id}`}></Link>
                <div className={styles.textDiv}>
                  <p className="text1">{project.text}</p>
                  <h3 className="title3">{project.title}</h3>
                </div>
                <Image
                  src={project.mainImage}
                  width={800}
                  height={1000}
                  alt=""
                ></Image>
              </div>
            ))}
          </div>
          {arrayNumber < 99 && (
            <div className={styles.buttonDiv}>
              <Link href="/gallery" className="button3">
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
