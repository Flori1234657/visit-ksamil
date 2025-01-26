import axios from "axios";

import type { Attractions } from "~/types/api";

export const fetchAttractions = async (otherQueries?: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}attractions/paginated?limitSize=3${otherQueries ? otherQueries : ""}`
    );

    const data: { attractions: Attractions[]; lastDoc: string } = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};
