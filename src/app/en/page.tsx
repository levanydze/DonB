//metadata
import { mainTitle } from "../../../controlFolder/control";
import { companyDescription } from "../../../controlFolder/control";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

//components
import Header from "../../../components/header/header4/Header";
import Footer from "../../../components/footer/footer3/Footer";
import LowerFoot from "../../../components/footer/lowerFooter2/LowerFoot";
import Hero from "../../../components/Hero/donaByggHero/Hero";
import FourBox from "../../../components/sectionComponents/FourBoxes/FourBox";
import FourText from "../../../components/WholeProjects/Donabygg/components/FourText/FourText";

//sources
import ItemsArray from "./gallery/ItemsArray/ItemsArray";
import ItemsServicesArray from "./services/ItemsServicesArray/ItemsServicesArray";
import Instagram from "../../../components/elfsightWidgets/Instagram";
import GooglrReviews from "../../../components/elfsightWidgets/GoogleReviews";
import Accordion from "../../../components/Accordions/Accordion1/Accordion";

export default function Home() {
  return (
    <main className="fadeOut">
      <Hero
        overlay
        button1Target="/se/contact"
        button1Value="Get Started"
        mainTitle="Site built.  Spacesaving. Custom made."
        text="If you can dream it -we can build it!"
      />
      <ItemsServicesArray
        arrayNumber={3}
        title="Services We Offer"
        span="Our Work"
      />
      <FourText />
      <ItemsArray
        arrayNumber={6}
        title="Recently Done Projects"
        span="Our Work"
      />
      <GooglrReviews />
      <Instagram />

      <Accordion />

      <FourBox />
    </main>
  );
}
