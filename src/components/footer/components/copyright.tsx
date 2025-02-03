import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Copyright = component$(() => {
  return (
    <div aria-label="Copyright bar" class="footer-copyright">
      <p>© This website is made by Florian Dollani</p>
      <Link target="_blank" href="/Privacy_Policy.pdf">
        Privacy Policy
      </Link>
    </div>
  );
});
