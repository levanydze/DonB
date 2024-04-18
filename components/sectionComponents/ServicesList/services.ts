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
      title: "Building website",
      text: "Building user-friendly, visually compelling website for restaurants to attract more customers.",
    },
    {
      extraTitle: "Food",
      title: "Photography",
      text: "Capturing the ambiance and dishes of your restaurant with professional photography.",
    },
    {
      title: "QR Menu + Control Panel",
      important: true,
      text: "Quickly control of your menu: add, delete, edit, or toggle items. from your mobile phone or computer",
    },
    {
      title: "Design For Any Devices",
      text: "Ensuring your restaurant’s website is perfectly operational across all devices.",
    },
    {
      title: "SEO Optimisation",
      text: "Optimizing your restaurant’s website to enhance its visibility and attract more diners via search engines.",
    },
    {
      title: "Google Map Setup",
      text: "Integrating Google Maps with your restaurant’s website for easier location access by customers.",
    },
  ],
  Construction: [
    {
      title: "Building website",
      text: "Constructing robust website that showcase the capabilities and past projects of construction firms.",
    },
    {
      title: "Photography",
      text: "Documenting the progression and detail of construction projects through professional photography.",
    },
    {
      title: "Logo Creation",
      text: "Creating strong, impactful logos that embody the essence of your construction business.",
    },
    {
      title: "Design For Any Devices",
      text: "Creating responsive website that work flawlessly for construction industry professionals on any device.",
    },
    {
      title: "SEO Optimisation",
      text: "Boosting the search engine rankings of construction companies to attract more business opportunities.",
    },
    {
      title: "Google Map Setup",
      text: "Utilizing Google Maps to showcase construction sites and office locations effectively.",
    },
  ],
  Gardening: [
    {
      title: "Building website",
      text: "Developing website for gardening services that highlight portfolio galleries and service offerings.",
    },
    {
      title: "Photography",
      text: "Highlighting the beauty and intricacy of garden designs with stunning photographic detail.",
    },
    {
      title: "Logo Creation",
      text: "Crafting logos that reflect the creativity and sustainability of your gardening business.",
    },
    {
      title: "Design For Any Devices",
      text: "Designing responsive website that make garden and landscape portfolios accessible on any device.",
    },
    {
      title: "SEO Optimisation",
      text: "Improving the online presence of your gardening services to increase customer engagement.",
    },
    {
      title: "Google Map Setup",
      text: "Embedding Google Maps to help clients locate your gardening centers or project sites easily.",
    },
  ],
  Art: [
    {
      title: "Building website",
      text: "Creating stunning visual website that showcase artists' portfolios beautifully.",
    },
    {
      title: "Photography",
      text: "Professional photography services tailored to capture and enhance artists' works.",
    },
    {
      title: "Logo Creation",
      text: "Designing distinctive logos that capture the unique identity of art businesses.",
    },

    {
      title: "Design For Any Devices",
      text: "Ensuring your restaurant’s website is perfectly operational across all devices.",
    },
    {
      title: "SEO Optimisation",
      text: "Enhancing online visibility for artists and galleries to attract more patrons.",
    },
    {
      title: "Google Map Setup",
      text: "Implementing Google Maps to enhance the geographical accessibility of art exhibitions and galleries.",
    },
  ],
  Other: [
    {
      title: "Building website",
      text: "Providing versatile website solutions tailored to any industry’s needs.",
    },
    {
      title: "Photography",
      text: "Adapting our photography services to a wide range of client needs and sectors.",
    },
    {
      title: "Logo Creation",
      text: "Developing distinctive logos that capture the core identity of diverse businesses.",
    },
    {
      title: "Design For Any Devices",
      text: "Ensuring optimal functionality and design across all devices for any type of business.",
    },
    {
      title: "SEO Optimisation",
      text: "Custom SEO strategies that elevate your business's visibility across various search engines.",
    },
    {
      title: "Google Map Setup",
      text: "Implementing Google Maps to enhance the geographical accessibility of diverse businesses.",
    },
  ],
};
