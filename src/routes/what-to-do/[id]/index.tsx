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
        onPending={() => <div>Loading...</div>}
        onResolved={(data) => {
          return (
            <>
              <Article
                title={data!.title}
                description={data!.description}
                imgUrl={data!.imageUrl}
              />
              <SidePanel />
            </>
          );
        }}
        onRejected={() => <div>Something went wrong</div>}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "What to do in Ksamil?",
  meta: [
    {
      name: "description",
      content:
        "This page has different articles about what activities to do in Ksamil",
    },
  ],
};
