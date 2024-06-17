"use server";

// let intervalId: NodeJS.Timeout | undefined; // Variable to hold the interval ID

// async function setupFetchInterval() {
//   if (intervalId) {
//     clearInterval(intervalId);
//   }
//   // Setup to fetch data every 100000 milliseconds (100 seconds)
//   intervalId = setInterval(fetchData, 100000);
// }
import { ProjectProps } from "./ItemsArray/ItemsArray";
export async function fetchData(): Promise<ProjectProps[]> {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/DonaB-hub/MyWebSite/main/Services%20%26%20Gallery%20data/Gallery.json",
      { cache: "no-store" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function findDataById(id: string) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/DonaB-hub/MyWebSite/main/Services%20%26%20Gallery%20data/Gallery.json",
      { cache: "no-store" }
    );
    const data = await response.json();
    const project = data.find((project: any) => project.id === id);
    if (project) {
      return project;
    } else {
      console.error(`Project with  ${id} not found`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
