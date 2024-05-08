export interface ProjectDetProps {
  text: string;
  link: string;
  title: string;
  images: string[];
  mainImage: string;
  alt: string;
  describtion: string;
  id: string;
}
export interface ProjectProps {
  [key: string]: ProjectDetProps; // Index signature
}

export interface ProjectAllProps extends ProjectDetProps {}

export const projects: ProjectProps = {
  acme: {
    id: "1",
    text: "Loftsang within one day",
    link: "/contact",
    title: "Text Exmple 1",
    mainImage:
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
    images: [
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang1.webp",
    ],
    alt: "Acme's custom logo design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
  acme2: {
    id: "2",

    text: "Loftsang within one day",
    link: "/contact",
    title: "Text Exmple 2",
    mainImage:
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
    images: [
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang2.webp",
    ],
    alt: "Acme's custom logo design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
  acme3: {
    id: "3",

    text: "Loftsang within one day",
    link: "/contact",
    title: "Text Exmple 3",
    mainImage:
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
    images: [
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang3.webp",
    ],
    alt: "Acme's custom logo design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
  acme4: {
    id: "4",

    text: "Loftsang within one day",
    link: "/contact",
    title: "Text Exmple 4",
    mainImage:
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
    images: [
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/loftsang4.webp",
    ],
    alt: "Acme's custom logo design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis? ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam beatae, corporis enim nemo error! Totam repellat iste modi dicta accusantium quod maxime, laborum molestiae ipsam obcaecati animi accusamus omnis?",
  },
};
