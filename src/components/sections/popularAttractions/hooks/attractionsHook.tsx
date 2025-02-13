import { $, useResource$, useSignal, useStore } from "@builder.io/qwik";
import { reorderCards as reorderCardsHelper } from "~/helpers/carousel";
import { fetchAttractions } from "~/api/attractions";

import type { AttractionStoreDataType } from "../types/card";

export const useAttractions = ({
  firstAttractions,
}: {
  firstAttractions: AttractionStoreDataType;
}) => {
  const fetchNextAttractions = useSignal<
    { index: number } | "dont-fetch-again" | null
  >(null);

  const attractionsStore = useStore({
    data: firstAttractions,
    setData: $(function (
      this: { data: AttractionStoreDataType },
      newFetchedData: AttractionStoreDataType
    ) {
      this.data = {
        attractions: [...this.data.attractions, ...newFetchedData.attractions],
        lastDoc: newFetchedData.lastDoc,
      };
    }),
    reorderCards: $(function (
      this: { data: AttractionStoreDataType },
      index: number
    ) {
      this.data.attractions = reorderCardsHelper(index, this.data.attractions);
    }),
  });

  const newAttractions = useResource$(async ({ track, cleanup }) => {
    track(() => fetchNextAttractions.value);
    const controller = new AbortController();
    cleanup(() => controller.abort());

    if (
      !fetchNextAttractions.value ||
      fetchNextAttractions.value === "dont-fetch-again"
    )
      return null;

    const response = await fetchAttractions(
      `&lastDocId=${attractionsStore.data.lastDoc}`
    );
    if (!response || response.attractions.length === 0) return null;

    return response;
  });

  return { fetchNextAttractions, attractionsStore, newAttractions };
};
