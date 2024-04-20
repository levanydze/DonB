import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import { mainTitle } from "../../controlFolder/control";
import { companyDescription } from "../../controlFolder/control";
import Chachaweb from "../../components/Hero/chachaweb/Chachaweb";
import ShortImageText from "../../components/sectionComponents/shortImageText/ShortImageText";
import ServiceCards from "../../components/sectionComponents/ServicesList/ServiceCards";
import ContactForm from "../../components/contactForms/CotactForm2/ContactForm";
import ThreeReviews from "../../components/sectionComponents/ThreeReviews/ThreeReviews";
import TitleThree from "../../components/sectionComponents/TitleThree/TitleThree";
import PhotoText from "../../components/sectionComponents/PhotoText2/PhotoText";
import FourBox from "../../components/sectionComponents/FourBoxes/FourBox";
import WebsitesArray from "./websites/WebsiteProjects/WebsitesArray/WebsitesArray";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

export default function Home() {
  const { houseIcon } = assetsJson;
  const {
    responsiveScreens,
    responsiveTall,
    photoSceneWithout,
    webBuilding,
    QrMenu,
  } = imagesJson;
  return (
    <main className="fadeOut">
      <Chachaweb />
      <ServiceCards serviceCat={"Other"} arrayEmaunt={3} />
      <ShortImageText
        image={responsiveScreens}
        alt="mobile responsive screens laptop phone "
        title="Websites That Provides Best Practice in Any Devices"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, minus eveniet, iste id officia, voluptates expedita aliquid sit laudantium nisi illum recusandae eligendi molestias aut dolor vitae deleniti dolorum ea."
      />
      <PhotoText
        image={photoSceneWithout}
        alt="blabla"
        title1="PHOTOSHOOTING"
        title2="Createing Restaurant Menu From Scratch"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                porro sint quisquam id, sed voluptate! Dolor eveniet, sed libero
                suscipit sequi laborum quis explicabo officia ut enim laudantium
                nobis quosLorem ipsum dolor sit amet consectetur adipisicing
                elit. Neque porro sint quisquam id, sed voluptate! Dolor
                eveniet, sed libero suscipit sequi laborum quis explicabo
                eveniet, sed libero suscipit sequi laborum quis explicabo
                officia ut enim laudantium nobis quos."
      />
      <PhotoText
        image={QrMenu}
        reverse
        alt="blabla"
        title1="FOR RESTAURANTS"
        title2="How Does QR Menu Work"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                porro sint quisquam id, sed voluptate! Dolor eveniet, sed libero
                suscipit sequi laborum quis explicabo officia ut enim laudantium
                nobis quosLorem ipsum dolor sit amet consectetur adipisicing
                elit. Neque porro sint quisquam id, sed voluptate! Dolor
                eveniet, sed libero suscipit sequi laborum quis explicabo
                eveniet, sed libero suscipit sequi laborum quis explicabo
                officia ut enim laudantium nobis quos."
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
      <WebsitesArray
        arrayNumber={2}
        headTitle="Most Recent Web Projects"
        upperTitle="OUR WORK"
      />

      <ThreeReviews />
      <FourBox />
      <ContactForm />
    </main>
  );
}
