import React from "react";
import ContactForm from "../../../components/contactForms/CotactForm4/ContactForm";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  const { contactPage } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="" image={contactPage} short={true} />
      <ContactForm />
    </div>
  );
}
