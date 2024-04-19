import React, { Suspense } from "react";
// import styles from "./page.module.css";
import imagesJson from "../../../../json/images.json";
import PageHeadImage from "../../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import { ProjectDetProps, projects } from "../WebsiteProjects/projects";
import ContactForm from "@/components/contactForms/CotactForm2/ContactForm";
import FourBox from "@/components/sectionComponents/FourBoxes/FourBox";
import ItemDetailPage from "./components/ItemDetailPage";

export const generateMetadata = ({ params }: SlugPageProps) => {
  try {
    const data = projects[params.projectId];

    if (!data) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
        alternates: {
          canonical: "/",
        },
      };
    }

    // Return metadata based on the found project
    return {
      title: data.title,
      description: data.text,
      alternates: {
        canonical: `/menu/${data.title.replace(/\s+/g, "-").toLowerCase()}`, // Clean up title for URL
      },
    };
  } catch (error) {
    // Generic catch block in case of unexpected errors
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "An error occurred while trying to generate page metadata.",
      alternates: {
        canonical: "/",
      },
    };
  }
};

interface SlugPageProps {
  params: {
    projectId: string;
  };
}

export default function SlugPage({ params }: SlugPageProps) {
  const projectId = params.projectId;
  const project: ProjectDetProps | undefined = projects[projectId];
  const { headImage, responsiveScreens } = imagesJson;

  // console.log(params.projectId);
  // console.log(Object.keys(projects));
  return (
    <div className={`fadeOut `}>
      <PageHeadImage short image={headImage} value={project.title} />
      <ItemDetailPage
        text={project.text}
        title={project.title}
        link={project.link}
        image={project.image}
        alt={project.alt}
        describtion={project.describtion}
      />

      <FourBox />
      <ContactForm />
    </div>
  );
}
