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
        "This will attract more online visitors and improve onsite experience, crucial for advancing your business.",
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
        "Above mentioned two will costumise your website and attract more people online.",
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
        "This feature makes it easy to translate menu items, helping international guests understand and explore what they’re ordering.",
    },

    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/restaurantMenuUpdating.webp",
      upperTitle: "Menu Control Panel",
      title: "Updated Menu",
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
      text1: `Boost your online visibility with our SEO (Search Engine Optimization) strategies. Increase your search rankings and attract more customers by appearing at the top position in search results.`,
    },
  ],
  Construction: [
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/web%20building6.webp",
      upperTitle: "Building Construction Website",
      title: "Professional Website Design for Construction Firms",
      text1:
        "Build custom websites that highlight construction firms' capabilities and completed projects.",
      text2: "",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/construction%20capturing.webp",
      upperTitle: "Photography",
      title: "Professional Construction Photography",
      text1:
        "Capture the progression and detail of construction projects with professional photography.",
      text2:
        "Showcase the transformation before and after your construction team's work, impressing your customers.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/logo%20creation.webp",
      upperTitle: "Logo Creation",
      title: "Strong Branding",
      text1:
        "Creating powerful logos that represent your construction business.",
      text2:
        "Stand out in the industry with a unique and memorable brand identity that connects with your target audience.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/construction%20resp%204.webp",
      upperTitle: "Responsive Design",
      title: "Mobile Friendly Website Design",
      text1:
        "Responsive website designs ensuring optimal performance on any device.",
      text2:
        "Increase satisfaction and building trust with seamless access across devices.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/googleSearchRestaurant.webp",
      upperTitle: "SEO Optimisation",
      title: "Improved Search Rankings",
      text1:
        "Boosting the search engine rankings of construction companies to attract more business opportunities.",
      text2:
        "Increase online visibility and attract more organic traffic by optimizing your website for search engines.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/google%20map.webp",
      upperTitle: "Google Map Setup",
      title: "Showcase Locations",
      text1:
        "Utilizing Google Maps to showcase construction sites and office locations effectively.",
      text2:
        "Make it easy for potential clients to find and visit your locations, improve your online presence and credibility.",
    },
  ],
  Gardening: [
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/web-buiilding.webp",
      upperTitle: "Bulding Gardening Website",
      title: "Beautiful Web Presence",
      text1:
        "Create stunning websites that highlight the beauty and expertise of your gardening services.",
      text2:
        "Attract more clients and showcase your portfolio of beautiful gardens and landscaping projects.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/shooting%20of%20cutting%20grass.webp",
      upperTitle: "Photography",
      title: "Capturing Your Team and Work",
      text1:
        "Capture the stunning beauty of gardens and landscapes with our professional photography services. Our photos highlight the vibrant colors and intricate details that make your work stand out.",
      text2:
        "Display your gardening projects through high-resolution images that not only inspire but also draw in potential clients. Let your craftsmanship shine in every photo.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/responsive2.webp",
      upperTitle: "Responsive Design",
      title: "Mobile Friendly Experience",
      text1:
        "Responsive website designs that provide an optimal viewing experience on all devices.",
      text2:
        "Ensure your website looks great and functions seamlessly on smartphones, tablets, and desktops, attracting more clients.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/googleSearchRestaurant.webp",
      upperTitle: "SEO Optimisation",
      title: "Increased Online Search Visibility",
      text1:
        "Improve the search engine rankings of your gardening business to attract more potential clients.",
      text2:
        "Enhance your online presence and attract organic traffic by optimizing your website for search engines.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/logo%20making%20for%20gardening.webp",
      upperTitle: "Logo Creation",
      title: "Effective Branding",
      text1:
        "Design unique logos that reflect the essence of your gardening business.",
      text2:
        "Create a strong brand identity that sets you apart from competitors and resonates with your target audience.",
    },

    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/google%20map.webp",
      upperTitle: "Google Map Setup",
      title: "Location Showcasing",
      text1:
        "Utilize Google Maps to showcase the beautiful gardens and landscapes you've created.",
      text2:
        "Make it easy for potential clients to find and visit your locations, increasing your visibility and credibility.",
    },
  ],
  Other: [
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/web%20building6.webp",
      upperTitle: "Website Building",
      title: "Dynamic Web Presence",
      text1:
        "Create dynamic websites that effectively showcase the unique offerings of your business.",
      text2:
        "Attract more clients and highlight the diverse range of services you provide.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/web-buiilding.webp",
      upperTitle: "Photography",
      title: "Captivating Visuals",
      text1:
        "Professional photography that captures the essence of your business and services.",
      text2:
        "Attract potential clients with captivating images that showcase your offerings in the best light.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/logo%20making%20for%20gardening.webp",
      upperTitle: "Logo Creation",
      title: "Distinctive Brand Identity",
      text1:
        "Design unique logos that represent the essence of your business and set you apart from competitors.",
      text2:
        "Create a strong brand identity that resonates with your target audience and leaves a lasting impression.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/responsive3.webp",
      upperTitle: "Responsive Design",
      title: "Optimized User Experience",
      text1:
        "Responsive website designs that provide an optimized user experience on all devices.",
      text2:
        "Ensure your website looks great and functions seamlessly across smartphones, tablets, and desktops, maximizing engagement and conversions.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/googleSearchRestaurant.webp",
      upperTitle: "SEO Optimisation",
      title: "Improve Online Searchabelity",
      text1:
        "Improve the online visibility of your business and attract more potential clients.",
      text2:
        "Boost search engine rankings and attract organic traffic by optimizing your website for search engines.",
    },
    {
      image:
        "https://raw.githubusercontent.com/levanydze/SUP/main/Cha/Images/google%20map.webp",
      upperTitle: "Google Map Setup",
      title: "Location Highlighting",
      text1:
        "Utilize Google Maps to highlight the locations and areas you serve.",
      text2:
        "Make it easy for potential clients to find and connect with your business, increasing your reach and credibility.",
    },
  ],
};
