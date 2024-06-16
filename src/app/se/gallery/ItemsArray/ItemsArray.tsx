import React from "react";
import styles from "./ItemsArray.module.css";
import { fetchData } from "../DataFetch";
import Image from "next/image";
import Link from "next/link";

// export const revalidate = 5

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

export default async function ItemsArray({
  title,
  span,
  arrayNumber,
}: ItemsArrayProps) {
  const data: ProjectProps[] = await fetchData();

  return (
    <div className="container2">
      <section>
        <div className={`${styles.twoMainWrapper}`}>
          <span className="text1 textMedium">{span}</span>
          <h1 className="title4">{title}</h1>
          <div className={styles.twoProjectContainer}>
            {data.slice(0, arrayNumber).map((project) => (
              <div className={styles.imageDiv} key={project.id}>
                <Link
                  href={`/se/gallery/${project.id}`}
                  className={styles.link}
                >
                  <Image
                    src={project.mainImage}
                    width={1200}
                    height={1000}
                    alt={project.titleSVE}
                  />
                  <div className={styles.textDiv}>
                    <p className="textMini">{project.textSVE}</p>
                    <h3 className="title2">{project.titleSVE}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {arrayNumber < 99 && (
            <div className={styles.buttonDiv}>
              <Link href="/se/gallery" className="button3">
                se View All Projects
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
