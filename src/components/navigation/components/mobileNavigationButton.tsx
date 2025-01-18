import { type Signal, component$ } from "@builder.io/qwik";
import {
  FlChartBars3FromLeftOutline,
  FlCloseOutline,
} from "@qwikest/icons/flowbite";

export const MobileNavigationButton = component$(
  ({ showNavigation }: { showNavigation: Signal<boolean> }) => {
    return (
      <button
        class={`nav-logo-lang-container__nav-button --icon-button ${showNavigation.value ? "--color-secondary --rounded --md" : ""}`}
        onClick$={() => (showNavigation.value = !showNavigation.value)}
      >
        {showNavigation.value ? (
          <FlCloseOutline />
        ) : (
          <FlChartBars3FromLeftOutline />
        )}
      </button>
    );
  },
);
