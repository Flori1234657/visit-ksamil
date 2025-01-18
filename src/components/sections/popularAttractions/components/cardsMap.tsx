import { component$ } from "@builder.io/qwik";

import { HiArrowTopRightOnSquareOutline } from "@qwikest/icons/heroicons";

export const CardsMap = component$(() => {
  {
    /** <Image style={{ width: '300px', height: '200px'}}/> */
  }

  const placeholderData = [
    {
      id: "91tya8y8Y&As687a",
      title: "Shkëmbi i keq",
      image: "/images/pages/popular-attractions/buka-e-vivarit.jpg",
    },
    {
      id: "8j29js8*!982uj&As687a",
      title: "Shkëmbi i keq",
      image: "/images/pages/popular-attractions/shkembi-i-keq.jpg",
    },
    {
      id: ")90ndnu&^!7hd67t2",
      title: "Shkëmbi i keq",
      image: "/images/pages/popular-attractions/pema-e-thate.jpg",
    },
  ];

  return (
    <div
      aria-label="Cards map container"
      class="popular-attractions__buttons__cards-wrapper"
    >
      {placeholderData.map((card) => (
        <div
          aria-label="card"
          class="popular-attractions__buttons__cards-wrapper__card"
          key={card.id}
        >
          <img src={card.image} alt="Attraction" width={168} height={244.7} />
          <div
            aria-label="contant wrapper"
            class="popular-attractions__buttons__cards-wrapper__card__content"
          >
            <h2>{card.title}</h2>
            <button class="--tex-icon-button --sm">
              View on Map <HiArrowTopRightOnSquareOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});
