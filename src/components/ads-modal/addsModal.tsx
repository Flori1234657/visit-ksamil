import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./adds-modal.scss?inline";

export const AddsModal = component$(() => {
  useStyles$(styles);

  return (
    <dialog>
      <div class="adds-modal">
        <button class="adds-modal__close-button --icon-button">
          <svg
            data-qwikest-icon=""
            fill="none"
            height="1em"
            viewBox="0 0 14 14"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>{" "}
          // X icon
        </button>
        <img
          src="./placeholder.png"
          alt="Water sport in Ksamil advertisement"
          title="Advertisement for Jetski, Pedal boat's, Boat tours and so one."
          loading="lazy"
          decoding="async"
          width={168}
          height={244.7}
        />
        <button class="adds-modal__contact-button">Contact</button>
      </div>
    </dialog>
  );
});
