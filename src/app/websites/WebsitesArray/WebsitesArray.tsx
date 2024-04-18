import styles from "./WebsitesArray.module.css";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "./projects";
import Link from "next/link";
import Image from "next/image";

interface RecentProjectsProps {
  //arrayNumbers means list of array
  arrayNumber: number;
  headTitle: string;
}

export default function WebsitesArray({
  arrayNumber,
  headTitle,
}: RecentProjectsProps) {
  return (
    <div className="container2">
      <section>
        <div className={styles.mainWrapper}>
          <div className={styles.textDiv}>
            <h5 className="text1">OUR WORK</h5>
            <h6 className="title8 font1">{headTitle}</h6>
          </div>
          <div className={styles.cardsWrapper}>
            {Object.entries(projects)
              .slice(0, arrayNumber) // Only take the first two [key, value] pairs
              .map(([key, project], index) => (
                <div className={styles.card} key={index}>
                  <Link href={project.link} className={styles.overlay}></Link>
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
              <Link className=" button1 " href={"/work"}>
                View All Projects
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
