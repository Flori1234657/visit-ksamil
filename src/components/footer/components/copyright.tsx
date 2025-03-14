import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Copyright = component$(() => {
  return (
    <div aria-label="Copyright bar" class="footer-copyright" role="contentinfo">
      <p itemScope itemType="https://schema.org/CreativeWork">
        © <span itemProp="copyrightYear">2025</span>
        <span itemProp="copyrightHolder">Florian Dollani</span>
      </p>
      <Link
        target="_blank"
        href="/Privacy_Policy.pdf"
        rel="nofollow noopener"
        itemProp="usageInfo"
      >
        Privacy Policy
      </Link>
    </div>
  );
});
