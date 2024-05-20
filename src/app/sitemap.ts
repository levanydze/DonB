import { companyDomain } from "../../controlFolder/control";
import { navItems } from "../../controlFolder/control";
import { fetchData as fetchGalleryData } from "./gallery/DataFetch";
import { fetchData as fetchServicesData } from "./services/DataFetch";

export default async function sitemap() {
  const galleryData = await fetchGalleryData();
  const servicesData = await fetchServicesData();

  // if (!data || data.length === 0) {
  //   return null;
  // }

  // Mapping Gallery items to their URL objects
  const serviceSlugUrls = servicesData.map((item) => ({
    url: `${companyDomain}/services/${item.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Mapping Gallery items to their URL objects
  const gallerySlugUrls = galleryData.map((item) => ({
    url: `${companyDomain}/gallery/${item.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Mapping nav items to their URL objects
  const navUrls = navItems.map((navItem) => ({
    url: `${companyDomain}${navItem.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: navItem.homePage ? "yearly" : "monthly",
    priority: navItem.homePage ? 1 : 0.6,
  }));

  // const allUrls = [...slugUrls, ...navUrls];
  const allUrls = [...gallerySlugUrls, ...navUrls, ...serviceSlugUrls];

  return allUrls;
}

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
