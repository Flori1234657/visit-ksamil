/* eslint-disable qwik/loader-location */
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchArticles } from "~/api/articles";

export const useArticles = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  const articles = await fetchArticles();

  if (articles) return articles;

  // else return to the user that we had an err
});
