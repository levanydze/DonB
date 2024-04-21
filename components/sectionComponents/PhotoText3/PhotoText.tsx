//  <PhotoText servicesCat={servicesCat} number={0} />; services category can be dynamic or just string

import Image from "next/image";
import styles from "./PhotoText.module.css";
import { PhotoTextData } from "./photoTextArray";
interface PhotoTextProps {
  servicesCat: string;
  number: number;
  reverse?: boolean;
}

export default function PhotoText({
  servicesCat,
  number,
  reverse,
}: PhotoTextProps) {
  // Access the category array and then the specific item
  const categoryItems = PhotoTextData[servicesCat];
  const item = categoryItems && categoryItems[number];
  const { image, upperTitle, title, text1, text2, text3, text4 } = item;

  return (
    <div className={reverse ? "container2" : "container1"}>
      <section>
        <div className={styles.mainWrapper}>
          <div
            className={`${styles.innerWrapper} ${
              reverse ? styles.reverse : ""
            }`}
          >
            <div className={styles.imageDiv}>
              <Image src={image} alt={title} width={400} height={700} />
            </div>
            <div className={styles.textDiv}>
              {upperTitle && (
                <span className="text1 textMedium">{upperTitle}</span>
              )}
              <h3 className="title6">{title}</h3>
              <ul className={styles.textsDiv}>
                <li className="text2">{text1}</li>
                {text2 ? <li className="text2">{text2}</li> : null}
                {text3 ? <li className="text2">{text3}</li> : null}
                {text4 ? <li className="text2">{text4}</li> : null}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
