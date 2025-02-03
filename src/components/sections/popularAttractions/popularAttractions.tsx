import {
  $,
  component$,
  Resource,
  useResource$,
  useSignal,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import { Buttons } from "./components/buttons";
import { CardsMap } from "./components/cardsMap";

import type { AttractionStoreDataType } from "./types/card";

import { reorderCards as reorderCardsHelper } from "~/helpers/carousel";
import { fetchAttractions } from "~/api/attractions";

import styles from "./popular-attractions.scss?inline";
import Blob from "../../../../public/images/svg/popular-attractions-blob.svg?jsx";

type Props = {
  firstAttractions: AttractionStoreDataType;
};

export const PopularAttractions = component$(({ firstAttractions }: Props) => {
  useStyles$(styles);

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

  const handleChangeCard = $((index: number) => {
    if (fetchNextAttractions.value === "dont-fetch-again") {
      attractionsStore.reorderCards(index);
      return;
    }
    fetchNextAttractions.value = { index };
  });

  return (
    <section class="popular-attractions" id="popular-attractions">
      <h2>Popular attractions</h2>
      <Blob />
      <Buttons cardChange={handleChangeCard}>
        <Resource
          value={newAttractions}
          onPending={() => (
            <CardsMap
              cardChange={handleChangeCard}
              cards={attractionsStore.data.attractions.slice(0, 3)}
            />
          )}
          onResolved={(data) => {
            if (data) attractionsStore.setData(data);

            if (
              fetchNextAttractions.value &&
              fetchNextAttractions.value !== "dont-fetch-again"
            )
              attractionsStore.reorderCards(fetchNextAttractions.value.index);

            if (data && data.attractions.length < 3)
              fetchNextAttractions.value = "dont-fetch-again";

            return (
              <CardsMap
                cardChange={handleChangeCard}
                cards={attractionsStore.data.attractions.slice(0, 3)}
              />
            );
          }}
        />
      </Buttons>
    </section>
  );
});
