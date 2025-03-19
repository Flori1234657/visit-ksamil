import { component$, useSignal } from "@builder.io/qwik";

interface Props {
  city: string;
  hours?: string[];
  butrintHours?: string[];
  sarandaHours?: string[];
  lat: string;
  long: string;
}

export const HourCard = component$(
  ({ city, hours, butrintHours, sarandaHours, lat, long }: Props) => {
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
          itemProp="schedule"
          itemScope
          itemType="https://schema.org/Schedule"
        >
          {city === "Ksamil" ? (
            <>
              <ul
                itemProp="event"
                itemScope
                itemType="https://schema.org/Event"
              >
                <li itemProp="name">To Butrint</li>
                {butrintHours?.map((hours) => (
                  <li
                    key={hours}
                    itemProp="subEvent"
                    itemScope
                    itemType="https://schema.org/BusTrip"
                  >
                    <div hidden>
                      <meta
                        itemProp="provider"
                        itemType="https://schema.org/Organization"
                        content="Albanian Private Bus Services"
                      />
                      <meta
                        itemProp="departureStation"
                        content={`${city} Bus Station`}
                      />
                      <meta
                        itemProp="arrivalStation"
                        content="Butrint National Park"
                      />
                    </div>
                    <time
                      dateTime={`T${hours.replace(" ", "")}`}
                      itemProp="startTime"
                    >
                      {hours}
                    </time>
                    <meta itemProp="name" content="Butrint Route" />
                    <meta
                      itemProp="offers"
                      itemType="https://schema.org/Offer"
                      content="Price: 50 ALL"
                    />
                  </li>
                ))}
              </ul>
              <ul
                itemProp="event"
                itemScope
                itemType="https://schema.org/Event"
              >
                <li itemProp="name">To Saranda</li>
                {sarandaHours?.map((hours) => (
                  <li
                    key={hours}
                    itemProp="subEvent"
                    itemScope
                    itemType="https://schema.org/BusTrip"
                  >
                    <div hidden>
                      <meta
                        itemProp="provider"
                        content="Albanian Private Bus Services"
                      />
                      <meta
                        itemProp="departureStation"
                        content={`${city} Bus Stop`}
                      />
                      <meta
                        itemProp="arrivalStation"
                        content="Saranda Bus Stop"
                      />
                    </div>
                    <time
                      dateTime={`T${hours.replace(" ", "")}`}
                      itemProp="startTime"
                    >
                      {hours}
                    </time>
                    <meta itemProp="name" content="Saranda Route" />
                    <meta
                      itemProp="offers"
                      itemType="https://schema.org/Offer"
                      content="Price: 150 ALL"
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul role="list" itemProp="schedule">
              {hours?.map((hour) => (
                <li
                  key={hour}
                  itemProp="event"
                  itemScope
                  itemType="https://schema.org/BusTrip"
                >
                  <div hidden>
                    <meta
                      itemProp="departureStation"
                      content={`${city} Station`}
                    />
                    <meta
                      itemProp="arrivalStation"
                      content="Ksamil Bust Stop's"
                    />
                  </div>
                  <time
                    dateTime={`T${hour.replace(" ", "")}`}
                    itemProp="startTime"
                  >
                    {hour}
                  </time>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Add price information for rich snippets */}
        <div hidden>
          <meta itemProp="price" content="50 - 200" />
          <meta itemProp="priceCurrency" content="ALL" />
          <meta itemProp="availableAtOrFrom" content={`${city} Bus Terminal`} />
          <div
            itemProp="location"
            itemScope
            itemType="https://schema.org/Place"
          >
            <meta itemProp="name" content={`${city} Bus Station`} />
            <div
              itemProp="geo"
              itemScope
              itemType="https://schema.org/GeoCoordinates"
            >
              <meta itemProp="latitude" content={lat} />
              <meta itemProp="longitude" content={long} />
            </div>
          </div>
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
