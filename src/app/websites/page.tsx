import ThreeReviews from "../../../components/sectionComponents/ThreeReviews/ThreeReviews";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import SliderPeople from "../../../components/animations/SliderPeople/SliderPeople";
import ContactForm from "../../../components/contactForms/CotactForm2/ContactForm";

export const metadata = {
  title: "Websites",
};

export default function servicesPage() {
  const { headImage, responsiveScreens } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="Website Templates" image={headImage} short={true} />
      <ThreeReviews />
      <SliderPeople />
      <ContactForm />
    </div>
  );
}
