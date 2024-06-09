import imagesJson from "../../../../json/images.json";
import ItemsServicesArray from "./ItemsServicesArray/ItemsServicesArray";
import PageHeadSpace from "../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";
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
    </div>
  );
}
