import Image from "next/image";
import { fireData } from "./functions";
import ServerCard from "./components/ServerCard";
import imagesJson from "../../json/images.json";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";
import { sectionOrder } from "../../controlFolder/control";
export const revalidate = 3600; // revalidate at most every hour

export const metadata = {
  title: "Menu ",
  description: "Delicious Food",
};

export default async function ServerMenu() {
  // Fetch data from Firebase
  const data = await fireData();

  if (!data) {
    return null;
  }

  const sortedSections = data.sort((a, b) => {
    const indexA = sectionOrder.indexOf(a.menuCategory);
    const indexB = sectionOrder.indexOf(b.menuCategory);
    return indexA - indexB;
  });

  // Destructure images
  const { headImage, pizza3High } = imagesJson;

  return (
    <>
      <PageHeadImage
        value="OUR DELICIOUS MENU"
        image={pizza3High}
        short={true}
      />
      <div className="container2 ">
        {sortedSections.map((section) => (
          <div key={section.menuCategory} className="text-center capitalize">
            <h3 className="font2 title4 mt-10 color1">MENU</h3>
            <p className="twoLines my-4"></p>
            <h2 className="text-3xl mb-10 font2">{section.menuCategory}</h2>

            <div className="flex items-center flex-wrap justify-center">
              {section.menuItems
                .sort((a, b) => a.priority - b.priority) // Sort by ascending priority
                .map((item) => (
                  <ServerCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    disable={item.disable}
                    portions={item.portions}
                    price={item.price}
                    priority={item.priority}
                    season={item.season}
                    special={item.special}
                    spicy={item.spicy}
                    vegan={item.vegan}
                    newItem={item.newItem}
                    ingredients={item.ingredients}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
