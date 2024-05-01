import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const SupportUs = component$(() => {
  return (
    <div aria-label="Conatiner for Support us link">
      <div aria-label="Starter heart icon">Start Icon</div>
      <h4>
        Support our work: <Link>Donate now!</Link>
      </h4>
      <div aria-label="End link icon">End Icon</div>
    </div>
  );
});
