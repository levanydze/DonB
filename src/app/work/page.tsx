import React from "react";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import RecentProjects from "../../../components/sectionComponents/RecentProjects/RecentProjects";
import ThreeReviews from "../../../components/sectionComponents/ThreeReviews/ThreeReviews";
import ServerCard from "../../../components/sectionComponents/ServicesList/ServiceCards";
import ContactForm from "../../../components/contactForms/CotactForm2/ContactForm";
export const metadata = {
  title: "Work",
};

export default function AboutPage() {
  const { headImage, pizza1High, chef } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="OUR WORK" image={pizza1High} short={true} />
      <RecentProjects arrayNumber={99} headTitle="Recent Projects" />
      <ServerCard />
      <ThreeReviews />
      <ContactForm />
    </div>
  );
}
