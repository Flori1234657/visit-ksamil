import { component$ } from "@builder.io/qwik";
import { FlChartBars3FromLeftOutline } from "@qwikest/icons/flowbite";

export const MobileNavigationButton = component$(() => {
  return (
    <button class="nav-logo-lang-container__nav-button --icon-button">
      <FlChartBars3FromLeftOutline />
    </button>
  );
});
