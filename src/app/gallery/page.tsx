import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import SliderPeople from "../../../components/Sliders/SliderPeople/SliderPeople";
import FourBox from "../../../components/sectionComponents/FourBoxes/FourBox";
import ItemsArray from "./ItemsArray/ItemsArray";
import PageHeadSpace from "../../../components/anyPageHead/PageHadSpace/PageHeadSpace";

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
