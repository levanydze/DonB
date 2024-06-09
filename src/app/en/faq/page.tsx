import ContactForm from "../../../../components/contactForms/CotactForm5/ContactForm";
import PageHeadSpace from "../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";
import Accordion from "@/components/Accordions/Accordion1/Accordion";
export const metadata = {
  title: "FAQ",
};

export default function AboutPage() {
  return (
    <div className="fadeOut">
      <PageHeadSpace />
      <PageHeadSpace />
      <h1 style={{ opacity: "0" }}>FAQ</h1>

      <Accordion />
      <ContactForm />
    </div>
  );
}
