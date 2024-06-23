//metadata
import { mainTitle } from "../../../controlFolder/control";
import { companyDescription } from "../../../controlFolder/control";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

//components
import Hero from "../../../components/Hero/donaByggHero/Hero";
import FourBox from "../../../components/sectionComponents/FourBoxes/FourBox";
import FourText from "../../../components/WholeProjects/Donabygg/components/FourTextSe/FourText";

//sources
import ItemsArray from "./gallery/ItemsArray/ItemsArray";
import ItemsServicesArray from "./services/ItemsServicesArray/ItemsServicesArray";
import Instagram from "../../../components/elfsightWidgets/Instagram";
import GooglrReviews from "../../../components/elfsightWidgets/GoogleReviews1se";
import Accordion from "../../../components/Accordions/Accordion1se/Accordion";

export default function Home() {
  return (
    <main className="fadeOut">
      <Hero
        overlay
        button1Target="/se/contact"
        button1Value="Börja nu"
        mainTitle="Sovloft. WIC och platbyggda garderober. Skräddarsydda bokhyllor."
        text="Om du kan drömma det - vi kan bygga det!"
      />
      <ItemsServicesArray
        arrayNumber={3}
        title="Våra tjänster"
        span="Våra byggen"
      />
      <FourText />
      <ItemsArray
        arrayNumber={6}
        title="Nyligen gjorda projekt"
        span="Våra byggen"
      />
      <GooglrReviews />
      <Instagram />

      <Accordion />

      <FourBox />
    </main>
  );
}
