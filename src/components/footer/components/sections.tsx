import { component$ } from "@builder.io/qwik";
import {
  HiKeyOutline,
  HiPencilSquareOutline,
  HiPhoneOutline,
  HiMapPinOutline,
  HiEnvelopeOutline,
} from "@qwikest/icons/heroicons";

import Logo from "../../../../public/logo-placeholder.png?jsx";

export const Sections = component$(() => {
  return (
    <div aria-label="Footer sections" class="footer-sections">
      <div aria-label="Website info" class="footer-sections__website-info">
        <Logo />
        <h1>VisitKsamil</h1>
        <p>
          This is a website run by a resident of Ksamil. Its focus is to give
          you the information you need about Ksamil before planning a trip here.
          We plan to add more useful things and information’s to this website.{" "}
        </p>
      </div>
      <div aria-label="Newsletter" class="footer-sections__newsletter">
        <h1>Newsletter</h1>
        <p>Get the latest from this website by email!</p>
        <div aria-label="actions" class="footer-sections__newsletter__actions">
          <div aria-label="Input with icon container" class="--input-icon">
            <i>
              <HiEnvelopeOutline />
            </i>
            <input type="email" placeholder={`example@mail.domain`} />
          </div>
          <button class="--tex-icon-button">
            Subscribe <HiKeyOutline />
          </button>
        </div>
      </div>
      <div aria-label="Travel stories" class="footer-sections__travel-stories">
        <h1>Travel stories</h1>
        <p>
          We are collecting travel stories from Ksamil to add them to our
          website!
        </p>
        <button class="--tex-icon-button">
          Leave My Story <HiPencilSquareOutline />
        </button>
      </div>
      <div aria-label="Contact" class="footer-sections__contact">
        <h1>Contact</h1>
        <ul>
          <li>
            <HiPhoneOutline /> +355 68 839 3968
          </li>
          <li>
            <HiMapPinOutline /> Ksamil
          </li>
          <li>
            <HiEnvelopeOutline /> floriandollani15@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
});
