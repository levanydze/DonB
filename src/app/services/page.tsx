import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import ThreeReviews from "../../../components/sectionComponents/ThreeReviews/ThreeReviews";
import ServicesWrapper from "../../../components/WholeProjects/ChaChaWeb/ServicePage/ServicesWrapper";
import ItemsServicesArray from "./ItemsServicesArray/ItemsServicesArray";
import ContactForm from "../../../components/contactForms/CotactForm5/ContactForm";
import PageHeadSpace from "../../../components/anyPageHead/PageHadSpace/PageHeadSpace";
export const metadata = {
  title: "Services",
};

export default function AboutPage() {
  const { roofDrone } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadSpace />
      <ItemsServicesArray
        title="Our Services"
        span="Services You Can Order"
        arrayNumber={99}
      />
      {/* <ContactForm /> */}
    </div>
  );
}
