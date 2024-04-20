import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import ThreeReviews from "../../../components/sectionComponents/ThreeReviews/ThreeReviews";
import ContactForm from "../../../components/contactForms/CotactForm2/ContactForm";
import ServicesWrapper from "./components/ServicesWrapper";
import WebsitesArray from "../websites/WebsiteProjects/WebsitesArray/WebsitesArray";
export const metadata = {
  title: "Services",
};

export default function AboutPage() {
  const { headImage, pizza1High, chef } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="OUR WORK" image={pizza1High} short={true} />
      <ServicesWrapper />
      <WebsitesArray
        arrayNumber={2}
        headTitle="Most Recent Web Projects"
        upperTitle="OUR WORK"
      />
      <ThreeReviews />
      <ContactForm />
    </div>
  );
}
