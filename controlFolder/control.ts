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
  // { title: "MENU", url: "/menu" },
  // { title: "Menu Clientside", url: "/fireClientMenu" },
  { title: "Menu", url: "/menu" },
  { title: "ABOUT", url: "/about" },
  { title: "CONTACT", url: "/contact" },
  { title: "RESERVATION", url: "/reservation", button: true },
];

// firebase iiner menuLink for fetching menu
// for example: export const firebaseMenuLink = "chachaab/menu";
export const firebaseMenuLink = "chachaab/menu";
