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
import assetsJson from "../../json/assets.json";
import ItemsArray from "./gallery/ItemsArray/ItemsArray";
import ItemsServicesArray from "./services/ItemsServicesArray/ItemsServicesArray";

export default function Home() {
  const { houseIcon } = assetsJson;
  // const { photoSceneAbowePasta, roofDrone } = imagesJson;
  // const { webBuilding, PaitingWall } = imagesJson;
  return (
    <main className="fadeOut">
      <Hero overlay />
      <ItemsServicesArray
        arrayNumber={3}
        title="Services We Offer"
        span="Our Work"
      />
      <FourText />
      <ItemsArray
        arrayNumber={2}
        title="Recently Done Projects"
        span="Our Work"
      />
      <div className="container2">
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
