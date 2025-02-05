import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface Props {
  id: string;
  imagePath: string;
  title: string;
  shortDescription: string;
  show: boolean;
  changeCard: QRL<(index: number) => void>;
  index: number;
}

export const WhatToDoCard = component$(
  ({
    shortDescription,
    id,
    // imagePath,
    title,
    show,
    changeCard,
    index,
  }: Props) => {
    const navigate = useNavigate();

    return show ? (
      <div
        key={`what-to-do-card-div${id}`}
        aria-label="What to to card"
        class="what-to-do__cards-map__card --visible"
      >
        <img
          // eslint-disable-next-line qwik/jsx-img
          src="/images/pages/what-to-do/placeholder.jpg" // for the moment then use cloudinary
          alt="Randrom"
        />
        <div
          aria-label="Text and button container"
          class="what-to-do__cards-map__card__text-button --visible"
        >
          <div
            aria-label="Text"
            class="what-to-do__cards-map__card__text-button__text-container"
          >
            <h3>{title}</h3>
            <p>{shortDescription}</p>
          </div>

          <button
            onClick$={() => navigate(`/what-to-do/${id}`)}
            class="--tex-icon-button --sm"
          >
            Discover{" "}
            <svg
              aria-hidden="true"
              fill="none"
              height="1em"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>{" "}
            {/** Arrow box icon */}
          </button>
        </div>
      </div>
    ) : (
      <div
        class="what-to-do__cards-map__card --hidden"
        onClick$={() => changeCard(index)}
      >
        <p>?</p>
      </div>
    );
  }
);
