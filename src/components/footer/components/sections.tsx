import { $, component$, useSignal } from "@builder.io/qwik";

import Logo from "../../../../public/logo.webp?jsx";
import { addSubscription } from "~/api/subscription";

export const Sections = component$(() => {
  const email = useSignal("");
  const handleSubmit = $(async () => {
    const { success, message } = await addSubscription(email.value);

    alert(message);

    if (success) {
      email.value = "";
    }
  });

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
              <svg
                aria-hidden="true"
                fill="none"
                height="1em"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              {/** Envelope icon */}
            </i>
            <input
              type="email"
              placeholder={`example@mail.domain`}
              bind:value={email}
            />
          </div>
          <button
            class="--tex-icon-button"
            disabled={
              !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                email.value
              )
            }
            onClick$={handleSubmit}
          >
            Subscribe
            <svg
              aria-hidden="true"
              fill="none"
              height="1em"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {/** Key Icon */}
          </button>
        </div>
      </div>
      <div aria-label="Travel stories" class="footer-sections__travel-stories">
        <h1>Travel stories</h1>
        <p>
          We are collecting travel stories from Ksamil to add them to our
          website!
        </p>
        <button
          class="--tex-icon-button"
          onClick$={() => {
            window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSf9j6JL_vE-fpcTXBxN_F7cS9JXE30_l-SKNWaFfVKRvemFNA/viewform?usp=dialog";
          }}
        >
          Leave My Story{" "}
          <svg
            aria-hidden="true"
            fill="none"
            height="1em"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {/** Pencil Icon */}
        </button>
      </div>
      <div aria-label="Contact" class="footer-sections__contact">
        <h1>Contact</h1>
        <ul>
          <li>
            <svg
              aria-hidden="true"
              fill="none"
              height="1em"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {/** Phone icon */}
            +355 68 839 3968
          </li>
          <li>
            <svg
              aria-hidden="true"
              fill="none"
              height="1em"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {/** Location icon */}
            Ksamil
          </li>
          <li>
            <svg
              aria-hidden="true"
              fill="none"
              height="1em"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {/** Envelope icon */}
            floriandollani15@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
});
