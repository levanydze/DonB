"use client";
import React, { useState } from "react";
import styles from "./ServicesWrapper.module.css";
import imagesJson from "../../../../json/images.json";
import ServerCard from "../../../../components/sectionComponents/ServicesList/ServiceCards";
import PhotoText from "../../../../components/sectionComponents/PhotoText3/PhotoText";
import { services } from "../../../../components/sectionComponents/ServicesList/services";
import TitleCatrgory from "./TitleCatrgory/TitleCatrgory";

export default function ServicesWrapper() {
  const [servicesCat, setServicesCat] = useState<string>("Restaurant");

  const { headImage, chef } = imagesJson;
  return (
    <>
      <div className={styles.caregory}>
        {Object.keys(services).map((category, index) => (
          <input
            key={index}
            className={servicesCat === category ? styles.activeCategory : ""}
            type="button"
            value={category}
            onClick={() => setServicesCat(category)}
          />
        ))}
      </div>
      <ServerCard serviceCat={servicesCat} arrayEmaunt={6} />
      <TitleCatrgory servicesCat={servicesCat} />
      <PhotoText servicesCat={servicesCat} number={0} reverse />
      <PhotoText servicesCat={servicesCat} number={1} />
      <PhotoText servicesCat={servicesCat} number={2} reverse />
      <PhotoText servicesCat={servicesCat} number={3} />
      <PhotoText servicesCat={servicesCat} number={4} reverse />
      <PhotoText servicesCat={servicesCat} number={5} />
    </>
  );
}
