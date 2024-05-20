//metadata
import { mainTitle } from "../../controlFolder/control";
import { companyDescription } from "../../controlFolder/control";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

//components
import Hero from "../../components/Hero/donaByggHero/Hero";
import ThreeReviews from "../../components/sectionComponents/ThreeReviews/ThreeReviews";
import FourBox from "../../components/sectionComponents/FourBoxes/FourBox";
import ThreeImages from "../../components/WholeProjects/Donabygg/Services/ThreeImages/ThreeImages";
import TwoProjects from "../../components/WholeProjects/Donabygg/DoneProjects/TwoProjects/TwoProjects";
import FourText from "../../components/WholeProjects/Donabygg/components/FourText/FourText";
import SliderPeople from "../../components/Sliders/SliderPeople/SliderPeople";

//sources
import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import ItemsArray from "./gallery/ItemsArray/ItemsArray";
import ItemsServicesArray from "./services/ItemsServicesArray/ItemsServicesArray";
import Image from "next/image";
import PhotoText from "@/components/sectionComponents/PhotoText2/PhotoText";
import Accordion from "@/components/Accordions/Accordion1/Accordion";

export default function Home() {
  const { houseIcon } = assetsJson;
  const { photoSceneAbowePasta, roofDrone } = imagesJson;
  // const { webBuilding, PaitingWall } = imagesJson;
  return (
    <main className="fadeOut">
      <Hero overlay />
      <Accordion />
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
      <div className="container2">
        <h4 className=" textMedium textCenter">Customer Reviews </h4>
        <section>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-07cf9a40-aaef-4514-bcb7-a371f9c7292f"
            data-elfsight-app-lazy
          ></div>
          <div className="widgetHider"></div>
        </section>
      </div>
      {/* <SliderPeople /> */}
      <FourBox />
    </main>
  );
}
