import Image from "next/image";
import styles from "./FourText.module.css";
const texts = {
  text1: {
    title: "Build Everything ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. quas exercitationem aperiam cumque.",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/arrowTopIcon.svg",
    alt: "Acme's custom logo design",
  },
  text2: {
    title: "Build Loft Sängar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. quas exercitationem aperiam cumque.",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/chatIcon.svg",
    alt: "Acme's custom logo design",
  },
  text3: {
    title: "Build Some other stuff",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. quas exercitationem aperiam cumque.",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/earthwithheart.svg",
    alt: "Acme's custom logo design",
  },
  text4: {
    title: "Everything from  Scratch",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. mi quas exercitationem aperiam cumque.",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/markedIcon.svg",
    alt: "Acme's custom logo design",
  },
};

export default function FourText() {
  return (
    <div className="container1">
      <section>
        <div className={styles.fourTextWrapper}>
          {Object.entries(texts).map(([key, section], index) => (
            <div key={index} className={styles.eachDiv}>
              <div className={styles.imgWrapper}>
                <Image
                  src={section.icon}
                  alt={section.alt}
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div className={styles.textWrapper}>
                <h6 className="title1">{section.title}</h6>
                <p className="text1 textMedium">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
