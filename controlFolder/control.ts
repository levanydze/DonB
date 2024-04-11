export const companyName = "KASAMA";
export const companyDomain = "https://vuvuleo.com";
export const companyDescription =
  "Gardening copany for your BRF celaning snow and many other things"; //metadata title
export const googleVerification = "google-site-verification=65456789";
export const googleAnalyticsId = "";
export const companyLogo =
  "https://github.com/levanydze/constructionSupport/blob/main/KSM.png?raw=true";
export const underLogo = "GARDENING";

// menu list order
export const sectionOrder = [
  "example",
  // "dinner",
  // "breakfast",
  // "dessert",
  // "lunch",
  // "drinks",
  // "special",
];

export const socialMediaLinks = [
  {
    facebook: "https://www.facebook.com/levanidze/",
    instagram: "https://www.instagram.com/artoflevanidze/",
    linkedin: "https://www.linkedin.com/in/levanidze/",
    twitter: "https://twitter.com/levanydze",
  },
];

//nav items and sort
import { NavItemProps } from "../components/header/header3/Navigation";
export const navItems: NavItemProps[] = [
  { title: "HOME", url: "/", homePage: true },
  { title: "Menu", url: "/menu" },
  { title: "SERVICES", url: "/services" },
  { title: "ABOUT", url: "/about" },
  { title: "CONTACT", url: "/contact" },
  // { title: "RESERVATION", url: "/reservation", button: true },
];

// firebase iiner menuLink for fetching menu
// for example: export const firebaseMenuLink = "chachaab/menu";
export const firebaseMenuLink = "chachaab/menu";
