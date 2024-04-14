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
import ContactForm from "@/components/contactForms/CotactForm2/ContactForm";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

export default function Home() {
  const { houseIcon } = assetsJson;
  const { responsiveScreens } = imagesJson;
  return (
    <main className="fadeOut">
      <Chachaweb />
      <ServiceCards />
      <ShortImageText
        image={responsiveScreens}
        alt="mobile responsive screens laptop phone "
      />
      <ServiceCards />

      <RecentProjects />

      <FourBox />
      <ContactForm />
    </main>
  );
}
