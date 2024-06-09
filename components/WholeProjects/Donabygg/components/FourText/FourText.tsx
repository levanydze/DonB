import Image from "next/image";
import styles from "./FourText.module.css";
const texts = {
  text1: {
    title: "10+ years of experience",
    text: "My name is Paata and I am the founder of the company. I started with fine carpentry 2013 and since that it has become my passion. Our company is growing and we have more than 10 years of experience of building space saving furniture such as loft beds, lofts, on-site built wardrobes, Walk-in closets, TV-bookshelves and more.",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/arrowTopIcon.svg",
    alt: "10+ years of experience",
  },
  text2: {
    title: "Custom made and detail oriented",
    text: "Our furniture is completely custom made and adjusted to our customers' wishes. We pay great attention to details and always do our best to reach the goal that our customers give us. We also work with wardrobes and furniture from other providers and build them in. Built in wardrobes give a feeling of on-site and custom made furniture.",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/chatIcon.svg",
    alt: "Custom made and detail oriented",
  },
  text3: {
    title: "5/5 stars out of ca 80+ reviews",
    text: "Our determination and attention to detail always leaves our customers satisfied. We have had over 500 customers since we were founded and have only satisfied customers. Check out our reviews on google, facebook, offerta and more.",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/earthwithheart.svg",
    alt: "5/5 stars out of ca 80+ reviews",
  },
  text4: {
    title: "Free on-site check-up for quote and price guaranty",
    text: "We are offering one free on-site check-up and quote in order for you to get a precise quote. Which initially means that if you choose us - you will not be receiving any additional and unclear sum in the invoice. All costs are discussed in the quote and during the building process. We are also approved for F-tax",
    icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/markedIcon.svg",
    alt: "Free on-site check-up for quote and price guaranty",
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
