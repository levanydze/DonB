import styles from "./ItemDetailPage.module.css";
import { ProjectDetProps } from "../../WebsiteProjects/projects";
import Image from "next/image";
import Link from "next/link";

export default function ItemDetailPage({
  image,
  title,
  text,
  alt,
  link,
  describtion,
}: ProjectDetProps) {
  return (
    <div className="container1">
      <section>
        <div className={styles.mainWrapper}>
          <h2 className="title4">{text}</h2>
          <div className={styles.imageWrapper}>
            <Link
              href={link}
              className={`title6 textLight ${styles.imgOverlay}`}
            >
              <p>View Live Website</p>
            </Link>
            <Image src={image} width={2000} height={1500} alt={alt} />
          </div>
          <div className={styles.textWrapper}>
            <h3 className="title6">{title}</h3>
            <p className="text1 ">{describtion}</p>
          </div>
          <Link className="button3" href="/contact">
            Became a Client
          </Link>
        </div>
      </section>
    </div>
  );
}
