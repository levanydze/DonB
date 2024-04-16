//metadata
export const mainTitle = "ChaCha Web Agency"; //metadadta Title
export const companyDescription =
  "out main target is restaurant and construction companies but we also create web sites for various category companies "; //metadata title

//info
export const companyName = "ChaCha";
export const companyFullName = "ChaCha AB";
export const underLogo = "WEB AGENCY"; //Restaurant or Web agency or...
export const companyDomain = "https://chachaweb.se";
export const googleVerification = "";
export const googleAnalyticsId = "";
export const companyLogo = "";

// menu list order
export const sectionOrder = [
  "example", //keep examole here as it is
  //set menu categories down here
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
  // { title: "Menu", url: "/menu" },
  { title: "SERVICES", url: "/services" },
  { title: "WORK", url: "/work" },
  { title: "CONTACT", url: "/contact" },
  // { title: "BOOK A MEET", url: "/reservation", button: true },
];

// firebase iiner menuLink for fetching menu
// for example: export const firebaseMenuLink = "chachaab/menu";
export const firebaseMenuLink = "chachaab/menu";
