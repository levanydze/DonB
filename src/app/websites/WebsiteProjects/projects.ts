export interface ProjectDetProps {
  text: string;
  link: string;
  title: string;
  image: string;
  alt: string;
  describtion: string;
}
export interface ProjectProps {
  [key: string]: ProjectDetProps; // Index signature
}
export const projects: ProjectProps = {
  acme: {
    text: "Restaurant Webpage",
    link: "/",
    title: "Build Everything From Scratch",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/constr.png?raw=true",
    alt: "Acme's custom logo design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
  acme2: {
    text: "Elevating your corporate identity",
    link: "/",
    title: "Brand Identity Configuration",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/artofl.jpg?raw=true",
    alt: "Acme2 brand identity design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
  acme3: {
    text: "Seo Optimisaton",
    link: "/",
    title: "Logo Creation and Market Strategy",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/vuvuleo.png?raw=true",
    alt: "Strategic logo design for Acme3",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
  acme4: {
    text: "Focused on innovation",
    link: "/",
    title: "Menu Control Panel",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/LEVANIDZE.jpg?raw=true",
    alt: "Scalable logo design for Acme4",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
};
