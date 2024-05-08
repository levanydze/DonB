import React, { Suspense } from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import PageHeadImage from "../../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import styles from "./page.module.css";
import NestedDetails from "./NestedDetails/NestedDetails";
import imageJson from "../../../../json/images.json";

// metadata
import { findDataById } from "../DataFetch";
import SliderPeople from "../../../../components/Sliders/SliderPeople/SliderPeople";
import ContactForm from "../../../../components/contactForms/CotactForm5/ContactForm";
import PageHeadSpace from "../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";
export const generateMetadata = async ({ params }: MenuDetailsPageProps) => {
  try {
    const data = await findDataById(params.arrayId);
    return {
      title: data.title,
      description: data.description, // Assuming there's a 'description' field
      alternates: {
        canonical: `/gallery/${data.title.replace(/\s+/g, "-").toLowerCase()}`, // Clean up title for URL
      },
    };
  } catch (error) {}
};

interface MenuDetailsPageProps {
  params: {
    arrayId: string;
  };
}

export default function ArrayNestedPage({ params }: MenuDetailsPageProps) {
  const { headImage } = imageJson;

  return (
    <div className={`fadeOut ${styles.pageDetailWrapper}`}>
      <PageHeadSpace />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
      </div>
      <NestedDetails arrayId={params.arrayId} />
      <SliderPeople />
      <ContactForm />
    </div>
  );
}
