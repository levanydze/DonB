import { companyDomain } from "../../controlFolder/control";
import { navItems } from "../../controlFolder/control";
// import { fireData } from "./menu/functions";

export default async function sitemap() {
  // const slug = await fireData();

  // if (!slug) {
  // return null;
  // }

  // Mapping menu items to their URL objects
  // const slugUrls = slug.flatMap((menus) =>
  //   menus.menuItems.map((item) => ({
  //     //MUST FIX
  //     url: `${companyDomain}/menu/${item.id}`,
  //     lastModified: new Date().toISOString(),
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   }))
  // );

  // Mapping nav items to their URL objects
  const navUrls = navItems.map((navItem) => ({
    url: `${companyDomain}${navItem.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: navItem.homePage ? "yearly" : "monthly",
    priority: navItem.homePage ? 1 : 0.6,
  }));

  // const allUrls = [...slugUrls, ...navUrls];

  return navUrls;
}
