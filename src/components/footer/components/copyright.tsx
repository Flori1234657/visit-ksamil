import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Copyright = component$(() => {
  return (
    <div aria-label="Copyright bar" class="footer-copyright">
      <h2>© This website is made by Florian Dollani</h2>
      <Link target="_blank" href="/Privacy_Policy.pdf">
        Privacy Policy
      </Link>
    </div>
  );
});
