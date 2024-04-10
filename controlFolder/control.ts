export const companyName = "ChaCha";
export const companyDomain = "https://vuvuleo.com";
export const companyDescription = "Delicios Georgian food In city of Stockholm";
export const googleVerification = "google-site-verification=65456789";
export const googleAnalyticsId = "G-8BH3G37TNG";
export const companyLogo =
  "https://github.com/levanydze/constructionSupport/blob/main/KSM.png?raw=true";
export const underLogo = "GARDENING";

// menu list order
export const sectionOrder = [
  "dinner",
  "breakfast",
  "dessert",
  "lunch",
  "drinks",
  "special",
];

//nav items and sort
import { NavItemProps } from "../components/header/header3/Navigation";
export const navItems: NavItemProps[] = [
  { title: "HOME", url: "/", homePage: true },
  { title: "Menu", url: "/menu" },
  { title: "ABOUT", url: "/about" },
  { title: "CONTACT", url: "/contact" },
  { title: "RESERVATION", url: "/reservation", button: true },
];

// firebase iiner menuLink for fetching menu
// for example: export const firebaseMenuLink = "chachaab/menu";
export const firebaseMenuLink = "chachaab/menu";
