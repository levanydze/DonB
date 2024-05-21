//metadata
export const mainTitle = "DonaBygg"; //metadadta Title
export const companyDescription = ""; //metadata title

//info
export const companyName = "DonaBygg";
export const companyFullName = "DonaBygg";
export const underLogo = ""; //Restauran2t or Web agency or...
export const companyDomain = "https://donabygg.se";
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
    facebook: "https://www.facebook.com/DonaBygg",
    instagram: "https://www.instagram.com/donabygg.se/",
    // linkedin: "",
    offerta: "https://offerta.se/foretag/donabygg#ratings",
    // twitter: "",
    google:
      "https://www.google.com/maps/place/DonaBygg+(lofts%C3%A4ngar+och+f%C3%B6rvaringsm%C3%B6bler)/@59.5142562,17.8815778,580m/data=!3m2!1e3!4b1!4m6!3m5!1s0x465fa30abd04cff7:0xb868c7f468d25399!8m2!3d59.5142535!4d17.8841527!16s%2Fg%2F11h9kn9nck?hl=sv-SE&entry=ttu",
  },
];

//nav items and sort
import { NavItemProps } from "../components/header/header3/Navigation";
export const navItems: NavItemProps[] = [
  { title: "Home", url: "/", homePage: true },
  // { title: "Menu", url: "/menu" },
  // { title: "Home2", url: "/home2" },
  { title: "Services", url: "/services" },
  { title: "Gallery", url: "/gallery" },
  { title: "Contact", url: "/contact" },
  // { title: "BOOK A MEET", url: "/reservation", button: true },
];

// firebase iner menuLink for fetching menu for specific restaurant
// for example: export const firebaseMenuLink = "chachaab/menu";
// export const firebaseMenuLink = "chachaab/menu";
