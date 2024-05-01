import { component$ } from "@builder.io/qwik";
import { WhatToDoCard } from "./components/whatToDoCard";

export const WhatToDoCardsMap = component$(() => {
  const placeholderData = [
    {
      id: "1Afc243!!2233",
      image: (
        <img src="path here" alt="What to do image" width={50} height={50} />
      ),
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, delectus!",
    },
    {
      id: "1Afc2zxt!!2233",
      image: (
        <img src="path here" alt="What to do image" width={50} height={50} />
      ),
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, delectus!",
    },
    {
      id: "1Afc243!!22sopa[3",
      image: (
        <img src="path here" alt="What to do image" width={50} height={50} />
      ),
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, delectus!",
    },
    {
      id: "1Afc243|[s]a2233",
      image: (
        <img src="path here" alt="What to do image" width={50} height={50} />
      ),
      title: "Camping at night",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, delectus!",
    },
  ];

  return (
    <div aria-label="What to do cards map">
      {placeholderData.map((card) => (
        <WhatToDoCard
          description={card.description}
          id={card.id}
          image={card.image}
          title={card.title}
          key={card.id}
        />
      ))}
    </div>
  );
});
