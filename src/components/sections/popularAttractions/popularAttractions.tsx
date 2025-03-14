import { $, component$, Resource, useStyles$ } from "@builder.io/qwik";
import { Buttons } from "./components/buttons";
import { CardsMap } from "./components/cardsMap";
import { Loader } from "~/components/loading/Loader";

import type { AttractionStoreDataType } from "./types/card";

import styles from "./popular-attractions.scss?inline";
import Blob from "../../../../public/images/svg/popular-attractions-blob.svg?url";
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
    <section
      class="popular-attractions"
      id="popular-attractions"
      itemScope
      itemProp="hasPart"
      itemType="https://schema.org/ItemList"
    >
      <h2 itemProp="name">Popular attractions</h2>
      <img
        src={Blob}
        alt="Decorative background pattern"
        width={100}
        height={100}
        decoding="async"
        loading="lazy"
      />
      <Buttons cardChange={handleChangeCard}>
        <Resource
          value={newAttractions}
          onPending={() => <Loader fontSize={0.75} modifierClass="--black" />}
          onResolved={(data) => {
            if (data) attractionsStore.setData(data);

            if (
              fetchNextAttractions.value &&
              fetchNextAttractions.value !== "dont-fetch-again"
            )
              attractionsStore.reorderCards(fetchNextAttractions.value.index);

            if (data && data.attractions.length < 3)
              fetchNextAttractions.value = "dont-fetch-again";
            else fetchNextAttractions.value = null;

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
