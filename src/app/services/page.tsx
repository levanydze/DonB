import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
export const metadata = {
  title: "Seervices We Offer",
};

export default function servicesPage() {
  const { headImage } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="Our Services" image={headImage} short={true} />
    </div>
  );
}
