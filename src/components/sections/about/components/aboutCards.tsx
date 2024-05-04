import { component$ } from "@builder.io/qwik";

import HistorySvg from "../../../../../public/images/pages/about/history-blob.svg?jsx";
import BeautySvg from "../../../../../public/images/pages/about/beauty-blob.svg?jsx";
import ClearWatersSvg from "../../../../../public/images/pages/about/crystal-clear-waters-blob.svg?jsx";
import DiscoverSvg from "../../../../../public/images/pages/about/to-be-discovered-blob.svg?jsx";

export const AboutCards = component$(() => {
  const aboutCards = [
    {
      title: "History",
      description:
        "Ksamil, a coastal village that emerged during the communist era in 1966. Nestled south of Sarandë along the route to Butrint, it has blossomed into one of Albanias premier tourist destinations, captivating the hearts of both locals and travelers alike.",
      image: <HistorySvg />,
      class: "history",
    },
    {
      title: "Beauty",
      description:
        "Renowned for its breathtaking scenery. At the heart of its allure lie the enchanting Ksamil Islands, reminiscent of the Caribbean.Unlike its Mediterranean counterparts, Ksamil exudes a serene charm, offering crystal-clear turquoise waters and secluded shores that beckon exploration.",
      image: <BeautySvg />,
      class: "beauty",
    },
    {
      title: "Crystal clear waters",
      description:
        "Immerse yourself in the allure of Ksamil Beach, where the azure waters invite you to swim to the uninhabited islands dotting the coastline. Here, you'll find beauty that rivals the Maldives.",
      image: <ClearWatersSvg />,
      class: "crystal--clear--waters",
    },
    {
      title: "To be discovered",
      description:
        "But Ksamil is more than just a picturesque beach destination; it's a hidden gem waiting to be discovered. As Albania emerges as a burgeoning tourist hotspot in Europe, Ksamil stands out as a must-visit highlight along the Albanian Riviera.",
      image: <DiscoverSvg />,
      class: "to--be--discovered",
    },
  ];

  return aboutCards.map((card) => (
    <article key={card.title} class={`about-us__about-cards__${card.class}`}>
      <div aria-label="Text information">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
      {card.image}
    </article>
  ));
});
