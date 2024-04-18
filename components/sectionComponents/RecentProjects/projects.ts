export interface ProjectDetProps {
  text: string;
  link: string;
  title: string;
  image: string;
  alt: string;
}
interface ProjectProps {
  [key: string]: ProjectDetProps; // Index signature
}
export const projects: ProjectProps = {
  acme: {
    text: "Discover our comprehensive branding",
    link: "/",
    title: "Food Photogaaphy",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true",
    alt: "Acme's custom logo design",
  },
  acme2: {
    text: "Elevating your corporate identity",
    link: "/",
    title: "Brand Identity Configuration",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true",
    alt: "Acme2 brand identity design",
  },
  acme3: {
    text: "Seo Optimisaton",
    link: "/",
    title: "Logo Creation and Market Strategy",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true",
    alt: "Strategic logo design for Acme3",
  },
  acme4: {
    text: "Focused on innovation",
    link: "/",
    title: "Menu Control Panel",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true",
    alt: "Scalable logo design for Acme4",
  },
};
