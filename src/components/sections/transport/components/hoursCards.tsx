import { component$ } from "@builder.io/qwik";
import { HourCard } from "./components/hourCard";

export const HoursCards = component$(() => {
  const placeholderData = [
    {
      city: "Sarandë",
      hours: [
        "06 : 30",
        "07 : 00",
        "08 : 30",
        "09 : 30",
        "10 : 30",
        "11 : 30",
        "12 : 30",
        "13 : 30",
        "14 : 30",
        "15 : 30",
        "16 : 30",
      ],
    },
    {
      city: "Ksamil",
      butrintiHours: [
        "07 : 00",
        "07 : 30",
        "09 : 00",
        "10 : 00",
        "11 : 00",
        "12 : 00",
        "13 : 00",
        "14 : 00",
        "15 : 00",
        "16 : 00",
        "17 : 00",
      ],
      sarandaHours: [
        "07 : 20",
        "07 : 45",
        "09 : 45",
        "10 : 45",
        "11 : 45",
        "12 : 45",
        "13 : 45",
        "14 : 45",
        "15 : 45",
        "16 : 45",
        "17 : 45",
      ],
    },
    {
      city: "Butrint",
      hours: [
        "07 : 05",
        "07 : 30",
        "09 : 30",
        "10 : 30",
        "11 : 30",
        "12 : 30",
        "13 : 30",
        "14 : 30",
        "15 : 30",
        "16 : 30",
        "17 : 30",
      ],
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
