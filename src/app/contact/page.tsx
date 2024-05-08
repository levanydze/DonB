import React from "react";
import ContactForm from "../../../components/contactForms/CotactForm5/ContactForm";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  const { contactPage } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage
        value="Contact Us"
        image={contactPage}
        short={true}
        alt="shake a hand"
      />

      <ContactForm />
    </div>
  );
}
