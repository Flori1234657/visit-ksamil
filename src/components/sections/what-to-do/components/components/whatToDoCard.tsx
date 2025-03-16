import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface Props {
  slug: string;
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
    slug,
    imagePath,
    title,
    show,
    changeCard,
    index,
  }: Props) => {
    const navigate = useNavigate();

    return show ? (
      <div
        key={`what-to-do-card-div${slug}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${title} - Current activity`}
        class="what-to-do__cards-map__card --visible"
        itemScope
        itemProp="item"
        itemType="https://schema.org/Article"
      >
        {/* eslint-disable qwik/jsx-img  */}
        <img
          src={imagePath}
          alt={`${title} activity in Ksamil, Albania`}
          loading="lazy"
          decoding="async"
          width={100}
          height={60}
          itemProp="image"
        />
        <div
          aria-label="Text and button container"
          class="what-to-do__cards-map__card__text-button --visible"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/CreativeWork"
        >
          <div
            aria-label="Text"
            class="what-to-do__cards-map__card__text-button__text-container"
          >
            <h3 itemProp="headline">{title}</h3>
            <p itemProp="description">{shortDescription}</p>
          </div>

          <button
            onClick$={() => navigate(`/what-to-do/${slug}`)}
            class="--tex-icon-button --sm"
            aria-label={`Read more about ${title}`}
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
  },
);
