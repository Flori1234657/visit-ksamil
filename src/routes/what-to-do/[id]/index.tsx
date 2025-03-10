import {
  component$,
  Resource,
  useResource$,
  useStyles$,
} from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import SidePanel from "../components/sidePanel";

import styles from "./styles.scss?inline";
import Article from "../components/article";
import { fetchArticle } from "~/api/articles";

import NotFoundIcon from "../../../../public/images/svg/not-found-icon.svg?jsx";

export default component$(() => {
  useStyles$(styles);
  const location = useLocation();

  const articleData = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const response = await fetchArticle(location.params.id);
    if (!response) return null;

    return response;
  });

  return (
    <div class="what-to-do">
      <Resource
        value={articleData}
        onPending={() => (
          <div class="container">
            <div
              aria-label="Loading animation"
              class="container__spinner-loader"
              style={{ fontSize: "1rem" }}
            ></div>
          </div>
        )}
        onResolved={(data) => {
          if (!data)
            return (
              <p class="what-to-do__fallback-text">
                Something went wrong
                <br />
                <span aria-disabled="true">
                  <NotFoundIcon />
                </span>
              </p>
            );

          return (
            <>
              <Article data={data} />
              <SidePanel />
            </>
          );
        }}
        onRejected={() => (
          <p class="what-to-do__fallback-text">
            Something went wrong
            <br />
            <span aria-disabled="true">
              <NotFoundIcon />
            </span>
          </p>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "What to Do in Ksamil? Top Activities & Attractions (2025)",
  meta: [
    {
      name: "description",
      content:
        "Discover the best things to do in Ksamil, Albania! Explore beaches, islands, boat tours, Blue Eye, Butrint National Park, and other must-visit attractions.",
    },
    {
      name: "keywords",
      content:
        "things to do in Ksamil, Ksamil activities, Ksamil attractions, Ksamil beaches, Ksamil islands, Ksamil Albania, Butrint National Park, Blue Eye Albania",
    },
    {
      name: "author",
      content: "Visit Ksamil",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "What to Do in Ksamil? Best Activities & Attractions (2025)",
    },
    {
      property: "og:description",
      content:
        "Find out the top activities and attractions in Ksamil, Albania! From crystal-clear beaches to historical sites, here’s what to do in Ksamil.",
    },
    {
      property: "og:image",
      content: "https://visitksamil.info/change-based-on-vite-path-after-build",
    },
    {
      property: "og:url",
      content: "https://visitksamil.info/what-to-do",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "What to Do in Ksamil? Best Activities & Attractions (2024)",
    },
    {
      name: "twitter:description",
      content:
        "Find the best activities and attractions in Ksamil, Albania, including beaches, boat tours, and nature spots.",
    },
    {
      name: "twitter:image",
      content: "https://visitksamil.info/change-based-on-vite-path-after-build",
    },
  ],
};
