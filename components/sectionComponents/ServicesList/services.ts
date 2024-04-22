export interface ServiceDetailProps {
  title: string;
  text: string;
  important?: boolean;
  extraTitle?: string;
}
interface Services {
  [key: string]: ServiceDetailProps[]; // Index signature
}
export const services: Services = {
  Restaurant: [
    {
      title: "Building Website",
      text: "Make your restaurant stand out with our modern, easy to navigate websites. We build sites that satisfy and attract more customers",
    },
    {
      extraTitle: "Food",
      title: "Photography",
      text: "Professional photography showcases your menu and restaurant interiors, setisfies customers. ",
    },
    {
      extraTitle: "QR Menu",
      title: "",
      text: "Boost your restaurant's service with our QR menu, easily updated and translated on any customer’s phone.",
    },
    {
      title: "",
      extraTitle: " Menu Control Panel",
      text: "Our control panel lets you easily add, delete, or update menu items instantly, keeping your offerings fresh and current",
    },
    {
      extraTitle: "Responsive",
      title: "Design",
      text: "Our responsive web design ensures smooth navigation including mobile, tablet, laptop, or any devices",
    },

    {
      title: "SEO Optimisation",
      text: "Imrove your restaurant's search engine visibility to attract more customers online with our optimized website design.",
    },
  ],
  Construction: [
    {
      title: "Building Website",
      text: "Modern, easy to navigate web design that speaks for your construction business will attracts more clients",
    },
    {
      extraTitle: "Responsive",
      title: "Design",
      text: "Your customers can access your business website on mobile phones, laptops, and other devices, ensuring the best user experience.",
    },
    {
      title: "SEO Optimisation",
      text: "Good SEO helps your business rank higher on Google, making it easier for customers to find you when searching online.",
    },
    {
      extraTitle: "Targeted",
      title: "Photography",
      text: "We offer high quality photography for your projects, adding a trustworthy feel to your webpage",
    },

    {
      title: "Logo Creation",
      text: "We can assist with branding and logo creation to elevate your business identity",
    },
    {
      title: "Google Map Setup",
      text: "Use Google Maps to help local people find and use your services.",
    },
  ],
  Gardening: [
    {
      title: "Building Website",
      text: "Modern, easy to navigate web design that speaks for your gardening business will attracts more clients.",
    },
    {
      extraTitle: "Responsive",
      title: "Design",
      text: "Your customers can access your business website on mobile phones, laptops, and other devices, ensuring the best user experience.",
    },
    {
      extraTitle: "Targeted",
      title: "Photography",
      text: "We offer high quality photography for your projects, adding a trustworthy feel to your webpage.",
    },
    {
      title: "SEO Optimisation",
      text: "Good SEO helps your business rank higher on Google, making it easier for customers to find you when searching online.",
    },
    {
      title: "Logo Creation",
      text: "Create logos that reflect the creativity and sustainability of your gardening business.",
    },
    {
      title: "Google Map Setup",
      text: "Use Google Maps to help local people find and use your services.",
    },
  ],

  Other: [
    {
      title: "Building Website",
      text: "We build custom websites with modern designs that are easy to navigate, suitable for any industry.",
    },
    {
      extraTitle: "Targeted",
      title: "Photography",
      text: "Our photography services are customized to highlight the unique aspects of a wide range of sectors and client needs.",
    },
    {
      title: "SEO Optimisation",
      text: "Good SEO helps your business rank higher on Google, making it easier for customers to find you when searching online.",
    },
    {
      title: "Logo Creation",
      text: "We design distinctive logos that effectively capture and represent the core identity of diverse businesses.",
    },
    {
      extraTitle: "Responsive",
      title: "Design",
      text: "Our responsive designs ensure smooth navigation across all devices, enhancing user experience for any business.",
    },
    {
      title: "Google Map Setup",
      text: "We implement Google Maps to improve geographical accessibility and showcase your business locations effectively.",
    },
  ],
};
