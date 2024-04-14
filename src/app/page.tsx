import GuyWithServices from "../../components/sectionComponents/GuyWithServices/GuyWithServices";
import FourBox from "../../components/sectionComponents/FourBoxes/FourBox";
import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import PhotoText from "../../components/sectionComponents/PhotoText/PhotoText";
import SliderPeople from "../../components/animations/SliderPeople/SliderPeople";
import { mainTitle } from "../../controlFolder/control";
import { companyDescription } from "../../controlFolder/control";
import Chachaweb from "../../components/Hero/chachaweb/Chachaweb";
import ShortImageText from "../../components/sectionComponents/shortImageText/ShortImageText";
import RecentProjects from "../../components/sectionComponents/RecentProjects/RecentProjects";
import ServiceCards from "@/components/sectionComponents/Services/ServiceCards";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

export default function Home() {
  const { houseIcon, chair } = assetsJson;
  const { textIntoPhoto, olivOilApple, chef2, chef3, responsiveScreens } =
    imagesJson;
  return (
    <main className="fadeOut">
      <Chachaweb />
      <ServiceCards />
      <ShortImageText
        image={responsiveScreens}
        alt="mobile responsive screens laptop phone "
      />
      <RecentProjects />

      <SliderPeople />
      <FourBox />
    </main>
  );
}
