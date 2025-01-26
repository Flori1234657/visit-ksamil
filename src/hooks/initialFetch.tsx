/* eslint-disable qwik/loader-location */
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchArticles } from "~/api/articles";
import { fetchAttractions } from "~/api/attractions";

export const useArticles = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  const articles = await fetchArticles();

  if (articles) return articles;

  // else return to the user that we had an err
});

export const useAttractions = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  const attractions = await fetchAttractions();

  if (attractions) return attractions;

  // else return to the user that we had an err
});
