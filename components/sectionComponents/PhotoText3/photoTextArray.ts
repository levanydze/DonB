export interface PhotoTextProps {
  title: string;
  text1: string;
  text2?: string;
  text3?: string;
  text4?: string;
  upperTitle?: string;
  image: string;
}
interface ArrayProps {
  [key: string]: PhotoTextProps[]; // Index signature
}
export const PhotoTextData: ArrayProps = {
  Restaurant: [
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/web-buiilding.webp",
      upperTitle: "Building Restaurant Website",
      title: "Delicious Web Creation",
      text1:
        "Custom websites that reflect your restaurant's unique style and ambiance, showcasing its excellence, website that speaks for you.",
      text2:
        "This will attract more online visitors and enhance the onsite experience, crucial for advancing your business.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/shooting-without-person.webp",
      upperTitle: "Food & Design Photography",
      title: "Guide to the Right Choice",
      text1:
        "Custom photography that captures your restaurant's unique style and delicious menu, showcasing its excellence.",
      text2:
        "Menu images that help your customers make the right and easy choices, giving them a taste of what to order today and what they might try next, ensuring a great dining experience.",
      text3:
        "Custom photography of your interior and menu will attract more people online.",
    },

    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/phone%20qr%20code%20.webp",
      upperTitle: "QR Menu",
      title: "Advanced Dining Tech",
      text1:
        "QR codes placed on every table to automate and streamline your restaurant's service",
      text2:
        "It allows your customers to access the menu on their phones and easily navigate between sections.",
      text3:
        "makes it easy to translate  and  know more what are they ordering for international people",
    },

    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/restaurantMenuUpdating.webp",
      upperTitle: "Menu Control Panel",
      title: "Updated Menus",
      text1:
        "The control panel allows restaurant managers to easily update all menu items from a phone or any device in just seconds.",
      text2:
        "Using the control panel, you can add new items, delete old ones, edit details, disable or enable them, or even change their position, pretty much everything you need for menu management.",
    },

    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/responsive3.webp",
      upperTitle: "Responsive Design",
      title: "Mobile Friendly Webpage",
      text1:
        "Experience seamless navigation with our webpages designed for optimal performance across all devices. Whether you're accessing from a smartphone, tablet, or desktop, our responsive design ensures your website looks great and functions perfectly. This universal compatibility is essential for reaching all your customers effectively, wherever they are.",
    },

    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/googleSearchRestaurant.webp",
      upperTitle: "SEO Optimisation",
      title: "Rank Higher, Reach Further",
      text1:
        "Boost your online visibility with our tailored SEO strategies. Increase your search rankings and attract more customers by optimizing content and enhancing user engagement.",
    },
  ],
  Construction: [
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",
      upperTitle: "Building website",
      title: "Building website",
      text1:
        "Constructing robust website that showcase the capabilities and pastBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customers projects of construction firms.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",
      upperTitle: "Photography",
      title: "Photography",
      text1:
        "Documenting the progression and detail of construction projects through professional photogBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersraphy.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",
      upperTitle: "Logo Creation",
      title: "Logo Creation",
      text1:
        "Creating strong, impactful logos that embody the essence of your conBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersstruction business.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",
      upperTitle: "Design For Any Devices",
      title: "Design For Any Devices",
      text1:
        "Creating responsive website that work flawlessly for construction industry professionals oBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersn any device.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",
      upperTitle: "SEO Optimisation",
      title: "SEO Optimisation",
      text1:
        "Boosting the search engine rankings of constrBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersuction companies to attract more business opportunities.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",
      upperTitle: "Google Map Setup",
      title: "Google Map Setup",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
  ],
  Gardening: [
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",
      upperTitle: "Building website",
      title: "Building website",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/shooting-without-person.webp",

      upperTitle: "Photography",
      title: "Photography",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "Logo Creation",
      title: "Logo Creation",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/responsive2.webp",

      upperTitle: "Design For Any Devices",
      title: "Design For Any Devices",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "SEO Optimisation",
      title: "SEO Optimisation",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "Google Map Setup",
      title: "Google Map Setup",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
  ],
  Other: [
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "Building website",
      title: "Building website",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "Photography",
      title: "Photography",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more ",
      text2:
        "customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "SEO Optimisation",
      title: "SEO Optimisation",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "Logo Creation",
      title: "Logo Creation",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "Design For Any Devices",
      title: "Design For Any Devices",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },

    {
      image:
        "https://github.com/levanydze/constructionSupport/blob/main/high%20resolution%20images/pizza-vegetables-high.jpeg?raw=true",

      upperTitle: "Google Map Setup",
      title: "Google Map Setup",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locatBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersBuilding user-friendly, visually compelling website for restaurants to attract more customersions effectively.",
    },
  ],
};
