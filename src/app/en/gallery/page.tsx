import imagesJson from "../../../../json/images.json";
import ItemsArray from "./ItemsArray/ItemsArray";
import PageHeadSpace from "../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";

export const metadata = {
  title: "Gallery",
};

export default function projectsPage() {
  const { headImage, websitePage } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadSpace />
      <ItemsArray
        title="Recently Completed Projects"
        span="Our Work"
        arrayNumber={99}
      />
    </div>
  );
}
