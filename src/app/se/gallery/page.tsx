import ItemsArray from "./ItemsArray/ItemsArray";
import PageHeadSpace from "../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";

export const metadata = {
  title: "Gallery",
};

export default function projectsPage() {
  return (
    <div className="fadeOut">
      <PageHeadSpace />
      <ItemsArray
        title="Nyligen gjorda projekt"
        span="Våra byggen"
        arrayNumber={99}
      />
    </div>
  );
}
