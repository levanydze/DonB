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
        title="se Recently Completed Projects"
        span="se Our Work"
        arrayNumber={99}
      />
    </div>
  );
}
