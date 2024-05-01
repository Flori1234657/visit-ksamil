import { component$ } from "@builder.io/qwik";

interface Props {
  city: string;
  hours?: string[];
  butrintHours?: string[];
  sarandaHours?: string[];
}

export const HourCard = component$(
  ({ city, hours, butrintHours, sarandaHours }: Props) => {
    return (
      <div aria-label="bus hours card">
        <h4>From {city}</h4>

        <div aria-label="Hours list">
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

        <button>Icon here</button>
      </div>
    );
  },
);
