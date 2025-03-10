import type { Attractions } from "~/types/api";

export const fetchAttractions = async (otherQueries?: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}attractions/paginated?limitSize=3${otherQueries ? otherQueries : ""}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: { attractions: Attractions[]; lastDoc: string } =
      await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching attractions:", error);
  }
};
