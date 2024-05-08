import { component$ } from "@builder.io/qwik";
import { HourCard } from "./components/hourCard";

export const HoursCards = component$(() => {
  const placeholderData = [
    {
      city: "Sarandë",
      hours: ["08 : 30", "08 : 30", "08 : 30", "08 : 30", "08 : 30"],
    },
    {
      city: "Ksamil",
      butrintiHours: ["08 : 30", "08 : 30", "08 : 30", "08 : 30", "08 : 30"],
      sarandaHours: ["08 : 30", "08 : 30", "08 : 30", "08 : 30", "08 : 30"],
    },
    {
      city: "Butrint",
      hours: ["08 : 30", "08 : 30", "08 : 30", "08 : 30", "08 : 30"],
    },
  ];

  return (
    <div
      aria-label="hours cards container"
      class="transportation__hours-container"
    >
      <h3>Hours</h3>

      <div
        aria-label="hours cards wrapper"
        class="transportation__hours-container__cards-wrapper"
      >
        <HourCard
          city={placeholderData[0].city}
          hours={placeholderData[0].hours}
        />
        <HourCard
          city={placeholderData[1].city}
          butrintHours={placeholderData[1].butrintiHours}
          sarandaHours={placeholderData[1].sarandaHours}
        />
        <HourCard
          city={placeholderData[2].city}
          hours={placeholderData[2].hours}
        />
      </div>
    </div>
  );
});
