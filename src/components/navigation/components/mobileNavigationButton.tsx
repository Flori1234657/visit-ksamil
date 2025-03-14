import { type Signal, component$ } from "@builder.io/qwik";

export const MobileNavigationButton = component$(
  ({ showNavigation }: { showNavigation: Signal<boolean> }) => {
    return (
      <button
        class={`nav-logo-lang-container__nav-button --icon-button ${showNavigation.value ? "--color-secondary --rounded --md" : ""}`}
        onClick$={() => (showNavigation.value = !showNavigation.value)}
        aria-label={
          showNavigation.value
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-controls="mobile-menu"
        aria-expanded={showNavigation.value}
        itemProp="potentialAction"
        itemScope
        itemType="https://schema.org/Action"
      >
        {showNavigation.value ? (
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
          </svg> // X icon
        ) : (
          <svg
            data-qwikest-icon=""
            fill="none"
            height="1em"
            viewBox="0 0 16 12"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1h14M1 6h14M1 11h7"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg> // 3 bars Icon
        )}
        <meta itemProp="name" content="Toggle Navigation Menu" />
      </button>
    );
  },
);
