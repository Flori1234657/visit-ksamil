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
import { Loader } from "~/components/loading/Loader";

export default component$(() => {
  useStyles$(styles);
  const location = useLocation();

  const articleData = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const response = await fetchArticle(location.params.slug);
    if (!response) return null;

    return response;
  });

  return (
    <div class="what-to-do">
      <Resource
        value={articleData}
        onPending={() => <Loader fontSize={1} />}
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
  ],
};
