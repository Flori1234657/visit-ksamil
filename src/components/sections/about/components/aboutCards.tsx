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
        "Ksamil, a coastal village that emerged during the communist era in 1966. Nestled south of Sarandë along the route to Butrint, it has blossomed into one of Albanias premier tourist destinations, captivating the hearts of both locals and travelers alike.",
      image: HistoryImg,
      class: "history",
    },
    {
      title: "Beauty",
      description:
        "Renowned for its breathtaking scenery. At the heart of its allure lie the enchanting Ksamil Islands, reminiscent of the Caribbean.Unlike its Mediterranean counterparts, Ksamil exudes a serene charm, offering crystal-clear turquoise waters and secluded shores that beckon exploration.",
      image: BeautyImg,
      class: "beauty --left",
    },
    {
      title: "Crystal clear waters",
      description:
        "Immerse yourself in the allure of Ksamil Beach, where the azure waters invite you to swim to the uninhabited islands dotting the coastline. Here, you'll find beauty that rivals the Maldives.",
      image: ClearWatersImg,
      class: "crystal--clear--waters",
    },
    {
      title: "To be discovered",
      description:
        "But Ksamil is more than just a picturesque beach destination; it's a hidden gem waiting to be discovered. As Albania emerges as a burgeoning tourist hotspot in Europe, Ksamil stands out as a must-visit highlight along the Albanian Riviera.",
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
