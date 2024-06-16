import React from "react";
import ContactForm from "../../../../components/contactForms/CotactForm5se/ContactForm";
import Accordion from "../../../../components/Accordions/Accordion1se/Accordion";
import PageHeadSpace from "../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  return (
    <div className="fadeOut">
      <PageHeadSpace />
      <ContactForm />
      <Accordion />
    </div>
  );
}
