import { navItems } from "../../controlFolder/control";
import { fireEachData } from "../../functions"; // Assuming this function exists and fetches your menu items
import companyDomain from "../../controlFolder/control";

export default async function sitemap(req, res) {
  // Construct URLs for static navigation items
  const staticUrls = navItems.map((item) => `${companyDomain}${item.url}`);

  // Fetch all menu items (assuming fireEachData is adapted for this purpose)
  // This function needs to return an array of menu item slugs or IDs
  const menuItems = await fireEachData();

  // Construct URLs for dynamic menu item pages
  const menuUrls = menuItems.map((itemId) => `${companyDomain}/menu/${itemId}`);

  // Combine static and dynamic URLs
  const allUrls = [...staticUrls, ...menuUrls];

  // Set response header
  res.setHeader("Content-Type", "text/xml");

  // Start of the XML sitemap content
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each URL to the XML content
  allUrls.forEach((url) => {
    xml += `
    <url>
      <loc>${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`;
  });

  // End of the XML sitemap content
  xml += `</urlset>`;

  res.write(xml);
  res.end();
}
