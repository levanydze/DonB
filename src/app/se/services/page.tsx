import ItemsServicesArray from "./ItemsServicesArray/ItemsServicesArray";
import PageHeadSpace from "../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";
export const metadata = {
  title: "Services",
};

export default function AboutPage() {
  return (
    <div className="fadeOut">
      <PageHeadSpace />
      <ItemsServicesArray
        title="Våra tjänster"
        span="Tjänster du kan beställa"
        arrayNumber={99}
      />
    </div>
  );
}
