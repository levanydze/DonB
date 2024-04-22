import ThreeReviews from "../../../components/sectionComponents/ThreeReviews/ThreeReviews";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import ContactForm from "../../../components/contactForms/CotactForm2/ContactForm";
import WebsitesArray from "./WebsiteProjects/WebsitesArray/WebsitesArray";

export const metadata = {
  title: "Websites",
};

export default function servicesPage() {
  const { responsiveScreens, websitePage } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage
        value="Website Templates"
        image={websitePage}
        alt="website building digitalised"
        short={true}
      />
      <WebsitesArray
        arrayNumber={99}
        headTitle="Website Samples"
        upperTitle="OUR WORK"
      />
      <ThreeReviews />
      <ContactForm />
    </div>
  );
}
