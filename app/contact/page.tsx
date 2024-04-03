import React from "react";
import ContactForm from "../..//components/contactForms/CotactForm/ContactForm";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../json/images.json";
import MapAndTimes from "@/components/sectionComponents/map&times/MapTimes";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  const { headImage, pizza2High } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="CONTSCT US" image={pizza2High} short={true} />
      <ContactForm />
      <MapAndTimes />
    </div>
  );
}
