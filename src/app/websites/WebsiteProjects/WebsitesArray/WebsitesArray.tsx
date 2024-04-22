import styles from "./WebsitesArray.module.css";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "../projects";
import Link from "next/link";
import Image from "next/image";

interface RecentProjectsProps {
  //arrayNumbers means amount of  array
  arrayNumber: number;
  headTitle: string;
  upperTitle: string;
}

export default function WebsitesArray({
  arrayNumber,
  headTitle,
  upperTitle,
}: RecentProjectsProps) {
  return (
    <div className="container2">
      <section>
        <div className={styles.mainWrapper}>
          <div className={styles.textDiv}>
            <h5 className="text1">{upperTitle}</h5>
            <h6 className="title8 font1">{headTitle}</h6>
          </div>
          <div className={styles.cardsWrapper}>
            {Object.entries(projects)
              .slice(0, arrayNumber) // Only take the first two [key, value] pairs
              .map(([key, project], index) => (
                <div className={styles.card} key={index}>
                  <Link
                    href={`/websites/${key}`}
                    className={`${styles.overlay}`}
                  ></Link>
                  <div className={styles.imageDiv}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={700}
                      height={500}
                    ></Image>
                  </div>
                  <div className={styles.cardTextDiv}>
                    <MdArrowOutward className={styles.arrow} />
                    <p className="text1">{project.title}</p>
                    <h3 className="title4">{project.text}</h3>
                  </div>
                </div>
              ))}
          </div>
          {arrayNumber !== 99 ? (
            <div className={styles.viewAll}>
              <Link className=" button3 " href={"/"}>
                View All Projects
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
