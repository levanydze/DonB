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
        title="Optimal Performance on Any Device"
        text="Experience flawless functionality and design with our websites, optimized for every device. Whether you’re on a phone, tablet, or desktop, our sites deliver the best user experience, adapting seamlessly to meet your needs. Enjoy perfect viewing and interactive ease no matter where you are."
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
        text1={
          "Our photos show the story of your work. We take great care with light and detail to make pictures that really show off what you do."
        }
        text2={
          "Turning ideas into websites. Our development make what you want happen with modern and right fit web services."
        }
        text3={
          "The final product is a modern and custom website with simple navigation and great images attracts people and builds trust"
        }
      />
      <PhotoText
        image={photoSceneWithout}
        alt="blabla"
        reverse
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
