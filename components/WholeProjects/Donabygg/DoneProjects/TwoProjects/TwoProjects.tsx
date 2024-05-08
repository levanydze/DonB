"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TwoProjects.module.css";
import { fetchData } from "../../../../../src/app/gallery/DataFetch"; // Correct the path as needed

interface Project {
  id: string;
  text: string;
  link: string;
  title: string;
  mainImage: string;
  images: string[];
  alt: string;
  description: string;
}

interface RecentProjectsProps {
  arrayNumber: number;
  title: string;
  span: string;
}

export default function TwoProjects({
  arrayNumber,
  title,
  span,
}: RecentProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const fetchedData = await fetchData();
      // Assuming fetchedData[0] is the object containing all projects
      const projectObject = fetchedData[0];
      const projectArray = Object.entries(projectObject).map(
        ([key, value]) => ({
          ...(value as Project), // Cast each item to the Project type
          id: key, // Overwrite id with key if necessary
        })
      );
      setProjects(projectArray);
    }

    loadProjects();
  }, []);

  return (
    <div className="container2">
      <section>
        <div className={styles.twoMainWrapper}>
          <span className="text1 textMedium">{span}</span>
          <p className="title4">{title}</p>
          <div className={styles.twoProjectContainer}>
            {projects.slice(0, arrayNumber).map((project) => (
              <div key={project.id} className={styles.imageDiv}>
                <Link href={`/gallery/${project.id}`}>
                  <Image
                    src={project.mainImage}
                    width={1200}
                    height={1000}
                    alt={project.alt}
                    layout="responsive"
                  />
                  <div className={styles.textDiv}>
                    <p className="text1">{project.text}</p>
                    <h3 className="title3">{project.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {arrayNumber < 99 && (
            <Link href="/gallery">
              <p className="button3">View All Projects</p>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
