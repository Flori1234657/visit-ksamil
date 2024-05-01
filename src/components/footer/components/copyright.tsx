import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Copyright = component$(() => {
  return (
    <div aria-label="Copyright bar">
      <h2>© This website is made by Florian Dollani</h2>
      <Link>Privacy Policy</Link>
    </div>
  );
});
