import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import { mainTitle } from "../../controlFolder/control";
import { companyDescription } from "../../controlFolder/control";
import Chachaweb from "../../components/Hero/chachaweb2/Chachaweb";
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
  const { photoSceneAbowePasta, roofDrone } = imagesJson;
  const {
    responsiveScreens,
    responsiveTall,
    photoSceneWithout,
    webBuilding,
    PaitingWall,
  } = imagesJson;
  return (
    <main className="fadeOut">
      <Chachaweb />
      <ServiceCards serviceCat={"Restaurant"} arrayEmaunt={3} />
      <ShortImageText
        image={responsiveScreens}
        alt="mobile responsive screens laptop phone "
        title="Optimal Performance on Any Device"
        text="Experience flawless functionality and design with our websites, optimized for every device. Whether you’re on a phone, tablet, or desktop, our sites deliver the best user experience, adapting seamlessly to meet your needs. Enjoy perfect viewing and interactive ease no matter where you are."
      />
      <TitleThree
        mainTitle={"What we do?"}
        image1={roofDrone}
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
        image={PaitingWall}
        reverse
        alt="wall painting construction renovation"
        title1="RENOVATION"
        title2="CAPTURING RENOVATION WORK"
        text1="Our team takes photos that show the fine details and big changes in your renovation projects. We focus on the hard work and care your team puts into every job"
        text2="We also take before and after photos to clearly show how much your projects change. These photos prove the quality and impact of your work, helping you attract new clients"
      />
      <PhotoText
        image={photoSceneAbowePasta}
        alt="food photography camera tripod softboxes light  "
        title1="PHOTOSHOOTING"
        title2="Createing Restaurant Menu From Scratch"
        text1="We also tailor your menu to fit your restaurant's style, ensuring it's easy to read and visually appealing. Each dish is accompanied by a short, enticing description that resonates with your audience."
        text2="Creating a restaurant menu from scratch goes beyond just listing dishes. We start with professional photography that highlights your food in the best light. Our photographers use expert lighting techniques to make the colors and details of each dish pop."
        text3="Ultimately, your menu does more than list food it attracts and excites customers, prompting them to explore and enjoy your culinary offerings"
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
