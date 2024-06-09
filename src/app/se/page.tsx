//metadata
import { mainTitle } from "../../../controlFolder/control";
import { companyDescription } from "../../../controlFolder/control";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

//components
import Header from "../../../components/header/header4se/Header";
import Footer from "../../../components/footer/footer3/Footer";
import LowerFoot from "../../../components/footer/lowerFooter2/LowerFoot";
import Hero from "../../../components/Hero/donaByggHero/Hero";
import FourBox from "../../../components/sectionComponents/FourBoxes/FourBox";
import FourText from "../../../components/WholeProjects/Donabygg/components/FourText/FourText";

//sources
// import ItemsArray from "../gallery/ItemsArray/ItemsArray";
import ItemsServicesArray from "../services/ItemsServicesArray/ItemsServicesArray";
import Instagram from "../../../components/elfsightWidgets/Instagram";
import GooglrReviews from "../../../components/elfsightWidgets/GoogleReviews";
import Accordion from "../../../components/Accordions/Accordion1/Accordion";

export default function Home() {
  return (
    <main className="fadeOut">
      <Header />

      <Hero
        overlay
        button1Target="/se/contact"
        button1Value="Börja nu"
        mainTitle="Sovloft. WIC och platbyggda garderober. Skräddarsydda bokhyllor."
        text="Om du kan drömma det - kan vi bygga det!"
      />
      {/* <ItemsServicesArray
        arrayNumber={3}
        title="Services We Offer"
        span="Our Work"
      />
      {/* <FourText />
      <ItemsArray
        arrayNumber={6}
        title="Recently Done Projects"
        span="Our Work"
      />
      <GooglrReviews />
      <Instagram />

      <Accordion />

      <FourBox />*/}
      <Footer />
      <LowerFoot />
    </main>
  );
}