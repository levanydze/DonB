import React from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import styles from "./page.module.css";
import NestedDetails from "./NestedDetails/NestedDetails";

// metadata
import { findDataById } from "../DataFetch";
import PageHeadSpace from "../../../../../components/anyPageHead/PageHadSpace/PageHeadSpace";
export const generateMetadata = async ({ params }: MenuDetailsPageProps) => {
  try {
    const data = await findDataById(params.arrayId);
    return {
      title: data.titleSVE,
      description: data.descriptionSVE, // Assuming there's a 'description' field
      alternates: {
        canonical: `/se/gallery/${data.titleSVE
          .replace(/\s+/g, "-")
          .toLowerCase()}`, // Clean up title for URL
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
  return (
    <div className={`fadeOut ${styles.pageDetailWrapper}`}>
      <PageHeadSpace />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
      </div>
      <NestedDetails arrayId={params.arrayId} />
    </div>
  );
}
