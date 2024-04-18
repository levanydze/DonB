import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import { mainTitle } from "../../controlFolder/control";
import { companyDescription } from "../../controlFolder/control";
import Chachaweb from "../../components/Hero/chachaweb/Chachaweb";
import ShortImageText from "../../components/sectionComponents/shortImageText/ShortImageText";
import RecentProjects from "../../components/sectionComponents/RecentProjects/RecentProjects";
import ServiceCards from "../../components/sectionComponents/ServicesList/ServiceCards";
import ContactForm from "../../components/contactForms/CotactForm2/ContactForm";
import ThreePictures from "../../components/sectionComponents/ThreePictures/ThreePictures";
import ThreeReviews from "../../components/sectionComponents/ThreeReviews/ThreeReviews";
import TitleThree from "../../components/sectionComponents/TitleThree/TitleThree";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

export default function Home() {
  const { houseIcon } = assetsJson;
  const { responsiveScreens, responsiveTall, photoSceneWithout, webBuilding } =
    imagesJson;
  return (
    <main className="fadeOut">
      <Chachaweb />
      <ServiceCards />
      <ShortImageText
        image={responsiveScreens}
        alt="mobile responsive screens laptop phone "
        title="Websites That Provides Best Practice in Any Devices"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, minus eveniet, iste id officia, voluptates expedita aliquid sit laudantium nisi illum recusandae eligendi molestias aut dolor vitae deleniti dolorum ea."
        button="Get One"
        target="/"
        reverse={true}
      />
      <RecentProjects arrayNumber={2} headTitle="Recent Projects" />

      <ThreePictures
        image1={photoSceneWithout}
        image2={responsiveTall}
        image3={webBuilding}
        alt1={"blabla"}
        alt2={"blabla"}
        alt3={"blabla"}
      />
      <TitleThree
        mainTitle={"What we do?"}
        image1={photoSceneWithout}
        image2={webBuilding}
        image3={responsiveTall}
        alt1={"blabla"}
        alt2={"blabla"}
        alt3={"blabla"}
        title1={"Photography"}
        title2={"Web Development"}
        title3={"Result"}
      />

      <ThreeReviews />
      <ContactForm />
    </main>
  );
}
