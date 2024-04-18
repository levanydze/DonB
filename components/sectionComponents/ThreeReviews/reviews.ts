export interface RevirwDetProps {
  text: string;
  name: string;
  title: string;
  image: string;
  alt: string;
}
interface ReviewProps {
  [key: string]: RevirwDetProps; // Index signature
}
export const reviews: ReviewProps = {
  acme: {
    text: `"ChaCha's team transformed our online presence with a stunning website that not only looks great but also performs exceptionally on all devices. Their attention to detail and innovative approach have significantly boosted our business."`,
    name: "Roger DeNiro",
    title: "Co-founder at KSM",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true",
    alt: "Roger DeNiro smiling",
  },
  acme2: {
    text: `"Working with ChaCha was a game-changer for our marketing efforts. Their unique strategies and cutting-edge designs have helped us reach a wider audience and improve our customer engagement."`,
    name: "Julia Morison",
    title: "Marketing Director at BSP",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true",
    alt: "Julia Morison at a conference",
  },
  acme3: {
    text: `"ChaCha's commitment to excellence is evident in every project they undertake. Their bespoke solutions and proactive service have made them an indispensable part of our operations."`,
    name: "Alex Johnson",
    title: "Operations Manager at TTL",
    image:
      "https://github.com/levanydze/portfoliosupport/blob/main/me.png?raw=true",
    alt: "Alex Johnson overseeing work",
  },
};
