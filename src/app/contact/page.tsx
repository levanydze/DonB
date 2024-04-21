import React from "react";
import ContactForm from "../../../components/contactForms/CotactForm4/ContactForm";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import MapTimes from "../../../components/sectionComponents/map&times/MapTimes";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  const { contactPage, pizza2High } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="Contact Us" image={contactPage} short={true} />
      <ContactForm />
    </div>
  );
}
