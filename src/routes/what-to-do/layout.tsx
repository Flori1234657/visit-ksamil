import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <div>Side panel</div>
      <Slot />
    </div>
  );
});
