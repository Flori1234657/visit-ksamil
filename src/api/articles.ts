import type { Articles } from "~/types/api";

export const fetchArticles = async (otherQueries?: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}articles/paginated?limitSize=3${otherQueries ? otherQueries : ""}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: { articles: Articles[]; lastDoc: string } =
      await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

export const fetchArticle = async (slug: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}articles/${slug}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Articles = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching article:", error);
  }
};
