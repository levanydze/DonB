import React, { Suspense } from "react";
import styles from "./page.module.css";
import MenuDetails from "./menuDetails/MenuDetails";
import { fireEachData } from "../functions";

// import { fireData } from "../functions";

import { Metadata } from "next";
type Props = {
  params: {
    itemId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const data = await fireEachData(params.itemId);
    if (data) {
      const name = data.name;
      return {
        title: name,
        alternates: {
          canonical: `/menu/${data.name}`,
        },
      };
    } else {
      return {};
    }
  } catch (error) {
    return {};
  }
};

interface MenuDetailsPageProps {
  params: {
    itemId: string;
  };
}

export default function MenuDetailsPage({ params }: MenuDetailsPageProps) {
  console.log(params.itemId);
  return (
    <div className={`fadeOut ${styles.pageDetailWrapper}`}>
      <div className={styles.lowerDiv}>
        <MenuDetails itemId={params.itemId} />
      </div>
    </div>
  );
}
