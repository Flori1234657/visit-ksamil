import { component$ } from "@builder.io/qwik";

export const SupportUs = component$(() => {
  return (
    <div
      aria-label="Conatiner for Support us link"
      class="support-us-container"
    >
      <p>
        <span>
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
          </svg>
          {/*Heart Icon*/}
        </span>
        Support our work:{" "}
        <a
          href="https://www.paypal.com/paypalme/FlorianDollani"
          target="_blank"
        >
          Donate now!
        </a>
        <span>
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
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {/** Arrow box icon */}
        </span>
      </p>
    </div>
  );
});
