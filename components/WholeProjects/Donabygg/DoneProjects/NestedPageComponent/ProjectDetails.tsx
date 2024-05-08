import styles from "./ProjectDetails.module.css";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetProps } from "../TwoProjects/projects";
import AlbumSlider from "../../../../Sliders/AlbumSlider/AlbumSlider";

export default function ProjectDetails({
  images,
  title,
  text,
  describtion,
}: ProjectDetProps) {
  return (
    <>
      <AlbumSlider images={images} title={title} />
      <div className="container1">
        <section>
          <div className={styles.mainWrapper}>
            <h2 className="title4">{text}</h2>
            <div className={styles.textWrapper}>
              <h3 className="title6">{title}</h3>
              <p className="text1 ">{describtion}</p>
            </div>
            <Link className="button3" href="/contact">
              Get Yours
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
