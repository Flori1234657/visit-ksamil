import { component$, useSignal } from "@builder.io/qwik";

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
          aria-label="Show hours"
          class="--icon-button --rounded"
          onClick$={() => (showHours.value = !showHours.value)}
        >
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {/** Right icon */}
        </button>
      </div>
    );
  }
);
