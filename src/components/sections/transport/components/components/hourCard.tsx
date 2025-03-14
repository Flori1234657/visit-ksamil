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
        class={`transportation__hours-container__cards-wrapper__hour-card ${showHours.value ? "--show" : "--hide"} ${city === "Ksamil" && "--ksamil"}`}
        role="article"
        aria-label={`Bus schedule from ${city}`}
        itemScope
        itemProp="item"
        itemType="https://schema.org/Schedule"
      >
        <h4 itemProp="name">From {city}</h4>

        <div
          aria-label="Hours list"
          aria-expanded={showHours.value}
          class={
            "transportation__hours-container__cards-wrapper__hour-card__hours"
          }
        >
          {city === "Ksamil" ? (
            <>
              <ul>
                <li>To Butrint</li>
                {butrintHours?.map((hours) => (
                  <li
                    key={hours}
                    itemProp="departureTime"
                    itemScope
                    itemType="https://schema.org/BusTrip"
                  >
                    <time
                      dateTime={`T${hours.replace(" ", "")}`}
                      itemProp="departureTime"
                    >
                      {hours}
                    </time>
                    <meta itemProp="name" content="Butrint Route" />
                  </li>
                ))}
              </ul>
              <ul>
                <li>To Saranda</li>
                {sarandaHours?.map((hours) => (
                  <li
                    key={hours}
                    itemProp="departureTime"
                    itemScope
                    itemType="https://schema.org/BusTrip"
                  >
                    <time
                      dateTime={`T${hours.replace(" ", "")}`}
                      itemProp="departureTime"
                    >
                      {hours}
                    </time>
                    <meta itemProp="name" content="Saranda Route" />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul role="list" itemProp="schedule">
              {hours?.map((hour) => (
                <li key={hour} itemProp="departureTime">
                  <time dateTime={`T${hour.replace(" ", "")}`}>{hour}</time>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          class="--icon-button --rounded"
          onClick$={() => (showHours.value = !showHours.value)}
          aria-controls={`schedule-${city.toLowerCase()}`}
          aria-expanded={showHours.value}
          aria-label={`${showHours.value ? "Collapse" : "Expand"} ${city} bus schedule`}
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
  },
);
