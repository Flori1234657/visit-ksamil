import { component$, useSignal } from "@builder.io/qwik";

import { HiChevronDownOutline } from "@qwikest/icons/heroicons";

interface Props {
  city: string;
  hours?: string[];
  butrintHours?: string[];
  sarandaHours?: string[];
}

export const HourCard = component$(
  ({ city, hours, butrintHours, sarandaHours }: Props) => {
    const showHours = useSignal(false);

    return (
      <div
        aria-label="bus hours card"
        class={`transportation__hours-container__cards-wrapper__hour-card ${showHours.value ? "--show" : "--hide"} ${city === "Ksamil" && "--ksamil"}`}
      >
        <h4>From {city}</h4>

        <div
          aria-label="Hours list"
          class={
            "transportation__hours-container__cards-wrapper__hour-card__hours"
          }
        >
          {city === "Ksamil" ? (
            <>
              <ul>
                <li>To Butrint</li>
                {butrintHours?.map((hours) => <li key={hours}>{hours}</li>)}
              </ul>
              <ul>
                <li>To Saranda</li>
                {sarandaHours?.map((hours) => <li key={hours}>{hours}</li>)}
              </ul>
            </>
          ) : (
            <ul>{hours?.map((hour) => <li key={hour}>{hour}</li>)}</ul>
          )}
        </div>

        <button
          class="--icon-button --rounded"
          onClick$={() => (showHours.value = !showHours.value)}
        >
          <HiChevronDownOutline />
        </button>
      </div>
    );
  },
);
