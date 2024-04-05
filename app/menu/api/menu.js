import { fireData } from "../../../path/to/your/firebase/functions";

export default async function handler(req, res) {
  try {
    const menuData = await fireData();
    res.status(200).json(menuData);
  } catch (error) {
    console.error("Failed to fetch menu data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
