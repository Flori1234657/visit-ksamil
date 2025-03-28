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
        "Founded in 1966, Ksamil Albania transformed from a communist-era settlement to the Albanian Riviera premier destination. Located 14km south of Saranda along the route to UNESCO-listed Butrint National Park, Ksamil blends historical intrigue with Mediterranean charm.",
      image: HistoryImg,
      class: "history",
    },
    {
      title: "Beauty",
      description:
        "Experience the breathtaking beauty of Ksamil, where four small islands dot the Ionian Sea turquoise waters. These Blue Flag-quality beaches offer secluded coves and Caribbean-like clarity, making Ksamil Albania's top alternative to crowded Greek island destinations.",
      image: BeautyImg,
      class: "beauty --left",
    },
    {
      title: "Crystal clear waters",
      description:
        "Dive into the crystal-clear, azure waters of Ksamil, Albania—renowned for its safe, family-friendly bays and ideal snorkeling spots. These inviting, shallow waters near Saranda promise an unforgettable beach holiday experience.",
      image: ClearWatersImg,
      class: "crystal--clear--waters",
    },
    {
      title: "To be discovered",
      description:
        "Uncover the unspoiled charm of Ksamil, Albania—one of Europe's hidden Mediterranean treasures. Celebrated as an emerging destination, Ksamil offers authentic local culture, pristine nature, and developing beach resort amenities for the discerning traveler.",
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
