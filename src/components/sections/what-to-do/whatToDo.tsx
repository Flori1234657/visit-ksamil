import {
  $,
  component$,
  Resource,
  useResource$,
  useSignal,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import { WhatToDoCardsMap } from "./components/whatToDoCardsMap";

import type { ArticleStoreDataType } from "./types/cards";

import { HiArrowLeftOutline } from "@qwikest/icons/heroicons";
import styles from "./what-to-do.scss?inline";
import { reorderCards as reorderCardsHelper } from "~/helpers/carousel";
import { fetchArticles } from "~/api/articles";

export const WhatToDo = component$(
  ({ firstArticles }: { firstArticles: ArticleStoreDataType }) => {
    useStyles$(styles);

    const fetchNextArticles = useSignal<
      { index: number } | "dont-fetch-again" | null
    >(null);

    const articlesStore = useStore({
      data: firstArticles,
      setData: $(function (
        this: { data: ArticleStoreDataType },
        newFetchedData: ArticleStoreDataType
      ) {
        this.data = {
          articles: [...this.data.articles, ...newFetchedData.articles],
          lastDoc: newFetchedData.lastDoc,
        };
      }),
      reorderCards: $(function (
        this: { data: ArticleStoreDataType },
        index: number
      ) {
        this.data.articles = reorderCardsHelper(
          index,
          this.data.articles,
          true
        );
      }),
    });

    const newArticles = useResource$(async ({ track, cleanup }) => {
      track(() => fetchNextArticles.value);
      const controller = new AbortController();
      cleanup(() => controller.abort());

      if (
        !fetchNextArticles.value ||
        fetchNextArticles.value === "dont-fetch-again"
      )
        return null;

      const response = await fetchArticles(
        `&lastDocId=${articlesStore.data.lastDoc}`
      );
      if (!response || response.articles.length === 0) return null;

      return response;
    });

    const handleChangeCard = $((index: number) => {
      if (fetchNextArticles.value === "dont-fetch-again") {
        articlesStore.reorderCards(index);
        return;
      }
      fetchNextArticles.value = { index };
    });

    return (
      <section class="what-to-do" id="what-to-do">
        <h1>What to do?</h1>

        <Resource
          value={newArticles}
          onPending={() => (
            <WhatToDoCardsMap
              cards={articlesStore.data.articles.slice(0, 3)}
              handleChange={handleChangeCard}
            />
          )}
          onResolved={(data) => {
            if (data) articlesStore.setData(data);

            if (
              fetchNextArticles.value &&
              fetchNextArticles.value !== "dont-fetch-again"
            )
              articlesStore.reorderCards(fetchNextArticles.value.index);

            if (data && data.articles.length < 3)
              fetchNextArticles.value = "dont-fetch-again";

            return (
              <WhatToDoCardsMap
                cards={articlesStore.data.articles.slice(0, 3)}
                handleChange={handleChangeCard}
              />
            );
          }}
        />

        <button
          class="--tex-icon-button --color-secondary"
          onClick$={() => handleChangeCard(1)}
        >
          <HiArrowLeftOutline /> Next Card
        </button>
      </section>
    );
  }
);
