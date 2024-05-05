import { component$ } from "@builder.io/qwik";
import { WhatToDoCard } from "./components/whatToDoCard";

import Blob from "../../../../../public/images/svg/what-to-do-blob.svg?jsx";

export const WhatToDoCardsMap = component$(() => {
  const placeholderData = [
    {
      id: "1Afc243!!2233",
      image: "/images/pages/what-to-do/placeholder.jpg",
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
    },
    {
      id: "1Afc2zxt!!2233",
      image: "/images/pages/what-to-do/placeholder.jpg",
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
    },
    {
      id: "1Afc243!!22sopa[3",
      image: "/images/pages/what-to-do/placeholder.jpg",
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
    },
    {
      id: "1Afc243|[s]a2233",
      image: "/images/pages/what-to-do/placeholder.jpg",
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
    },
  ];

  const cardsForRender = [placeholderData[0], placeholderData[1]];

  return (
    <div aria-label="What to do cards map" class="what-to-do__cards-map">
      <Blob />

      {cardsForRender.map((card, index) => (
        <WhatToDoCard
          description={card.description}
          id={card.id}
          imagePath={card.image}
          title={card.title}
          key={card.id}
          show={index !== 1}
        />
      ))}
    </div>
  );
});
