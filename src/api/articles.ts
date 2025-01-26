import axios from "axios";

import type { Articles } from "~/types/api";

export const fetchArticles = async (otherQueries?: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}articles/paginated?limitSize=3${otherQueries ? otherQueries : ""}`
    );

    const data: { articles: Articles[]; lastDoc: string } = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};
