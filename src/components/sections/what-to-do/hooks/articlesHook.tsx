import { $, useResource$, useSignal, useStore } from "@builder.io/qwik";
import { reorderCards as reorderCardsHelper } from "~/helpers/carousel";
import { fetchArticles } from "~/api/articles";

import type { ArticleStoreDataType } from "../types/cards";

export const useArticles = ({
  firstArticles,
}: {
  firstArticles: ArticleStoreDataType;
}) => {
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
      this.data.articles = reorderCardsHelper(index, this.data.articles, true);
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

  return { fetchNextArticles, articlesStore, newArticles };
};
