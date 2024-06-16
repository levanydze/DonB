import Image from "next/image";
import styles from "./FourText.module.css";
const texts = {
  text1: {
    title: "10+ års erfarenhet",
    text: "Mitt namn är Paata och jag är grundare av DonaBygg. Jag började med finsnickeri 2013 och sedan dess har det blivit min passion. Våran företag växer och vi har mer än 10 års erfarenhet av att bygga utrymmesbesparande inbyggda och platsbyggda såsom loftsäng, loft, platsbygd garderob, inbyggd garderob, walk-in closet (WIC), TV-bokhylla m.m.",
    // icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/arrowTopIcon.svg",
    // alt: "10+ years of experience",
  },
  text2: {
    title: "Måttanpassad och detaljorienterad",
    text: "Våra möbler är absolut måttanpassade och anpassade till kundens önskemål. Vi är väldigt detaljinriktade och gör alltid vårt bästa att nå vårt mål.Förutom platsbyggda möbler vi jobbar också med möbler från andra leverantörer och gör dom inbyggda. På så sätt får man en känsla av platsbyggd och måttanpassade möbel.",
    // icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/chatIcon.svg",
    // alt: "Custom made and detail oriented",
  },
  text3: {
    title: "5/5 stjärnor utav ca 80+ omdöme",
    text: "Sedan företaget grundades, hade vi 500+ kunder och vi är stolta att berätta för alla att vi har bara nöjda kunder. Antagligen är det för att vi uppmärksammar detaljer och kundens önskemål.",
    // icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/earthwithheart.svg",
    // alt: "5/5 stars out of ca 80+ reviews",
  },
  text4: {
    title: "Gratis besiktning för offert och prisgaranti",
    text: "Vi erbjuder gratis besiktning för att ge dig exakt pris. Vilket i sig betyder att om du väljer oss - du kommer inte få en överraskande och odiskuterad summa i fakturan. Alla kostnader är diskuterade i offerten och under byggprocessen.Vi är godkända för F-skatt.",
    // icon: "https://raw.githubusercontent.com/levanydze/SUP/bbdd7e88cc418bfead7dd51b08cfc44cee8c83c4/global/assets/markedIcon.svg",
    // alt: "Free on-site check-up for quote and price guaranty",
  },
};

export default function FourText() {
  return (
    <div className="container1">
      <section>
        <div className={styles.fourTextWrapper}>
          {Object.entries(texts).map(([key, section], index) => (
            <div key={index} className={styles.eachDiv}>
              {/* <div className={styles.imgWrapper}>
                <Image
                  src={section.icon}
                  alt={section.alt}
                  width={100}
                  height={100}
                ></Image>
              </div> */}
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
