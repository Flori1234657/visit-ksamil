import { $, component$, Resource, useStyles$ } from "@builder.io/qwik";
import { Buttons } from "./components/buttons";
import { CardsMap } from "./components/cardsMap";

import type { AttractionStoreDataType } from "./types/card";

import styles from "./popular-attractions.scss?inline";
import Blob from "../../../../public/images/svg/popular-attractions-blob.svg?jsx";
import { useAttractions } from "./hooks/attractionsHook";

type Props = {
  firstAttractions: AttractionStoreDataType;
};

export const PopularAttractions = component$(({ firstAttractions }: Props) => {
  useStyles$(styles);

  const { attractionsStore, fetchNextAttractions, newAttractions } =
    useAttractions({ firstAttractions });

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
