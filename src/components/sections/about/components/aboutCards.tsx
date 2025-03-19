import { component$ } from "@builder.io/qwik";

import HistoryImg from "../../../../../public/images/pages/about/history-blob.webp?url";
import BeautyImg from "../../../../../public/images/pages/about/beauty-blob.webp?url";
import ClearWatersImg from "../../../../../public/images/pages/about/crystal-clear-waters-blob.webp?url";
import DiscoverImg from "../../../../../public/images/pages/about/to-be-discovered-blob.webp?url";

export const AboutCards = component$(() => {
  const aboutCards = [
    {
      title: "History",
      description:
        "Founded in 1966 during Albania's communist era, now into a premier destination on the Albanian Riviera. Located just 14km south of Saranda along the route to UNESCO-listed Butrint National Park, this coastal village combines rich history with Mediterranean charm.",
      image: HistoryImg,
      class: "history",
    },
    {
      title: "Beauty",
      description:
        "Experience Albania's best beaches along the Ionian Sea. The Ksamil Islands' Caribbean-like turquoise waters and secluded coves make this Albanian Riviera gem a top alternative to crowded Mediterranean destinations. Discover the main beaches with Blue Flag potential.",
      image: BeautyImg,
      class: "beauty --left",
    },
    {
      title: "Crystal clear waters",
      description:
        "Swim in Ksamil's azure waters - ranked among Europe's clearest. Safe for families with small children, these shallow bays near Saranda offer perfect conditions for snorkeling and beach holidays in Albania's southern coast.",
      image: ClearWatersImg,
      class: "crystal--clear--waters",
    },
    {
      title: "To be discovered",
      description:
        "As one of Europe's last hidden Mediterranean gems, Ksamil offers authentic Albanian tourism experiences. Voted 'Emerging Destination 2024' by Lonely Planet Albania, our coastal village combines untouched nature with developing beach resort amenities.",
      image: DiscoverImg,
      class: "to--be--discovered --left",
    },
  ];

  return aboutCards.map((card, index) => (
    <article
      key={card.title}
      class={`about-us__about-cards__${card.class}`}
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={`${index + 1}`} />
      <div
        role="article"
        aria-label={`${card.title} information`}
        itemProp="item"
        itemScope
        itemType="https://schema.org/Thing"
      >
        <h4 itemProp="name">{card.title}</h4>
        <p itemProp="description">{card.description}</p>
      </div>
      <img
        src={card.image}
        alt={`Illustration of ${card.title.toLowerCase()} in Ksamil, Albania`}
        width="100"
        height="100"
        decoding="async"
        loading="lazy"
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      />
      <meta
        itemProp="description"
        content={`Visual representation of ${card.title}`}
      />
    </article>
  ));
});
