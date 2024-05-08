// "use server";

let intervalId: NodeJS.Timeout | undefined; // Variable to hold the interval ID

async function setupFetchInterval() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  // Setup to fetch data every 100000 milliseconds (100 seconds)
  intervalId = setInterval(fetchData, 100000);
}

// export async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/dona.json"
//     );
//     const data = await response.json();
//     setupFetchInterval(); // Setup or reset the interval upon successful fetch
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }

// export async function findDataById(id: string) {
//   try {
//     const data = await fetchData(); // Reuse fetchData to maintain consistency with interval setup
//     const item = data.find((item: any) => item.id === id);
//     if (item) {
//       return item;
//     } else {
//       console.error(`Item with ID ${id}2 not found`);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error retrieving item:", error);
//     return null;
//   }
// }

export async function fetchData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/donaProjects.json",
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
      "https://raw.githubusercontent.com/levanydze/SUP/main/DonB/donaProjects.json",
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
