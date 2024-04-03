"use client";
import Link from "next/link";
import React from "react";
import PageHeadImage from "../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../json/images.json";
import NotFoundComponent from "../components/x-error-loading-notFound/notFound/NotFoundComponent";

export default function error() {
  const { headImage } = imagesJson;
  return (
    <>
      <PageHeadImage short image={headImage} value="Something Went Wrong " />
      <NotFoundComponent />
      <h6 className="title1 auto color1"></h6>
    </>
  );
}
