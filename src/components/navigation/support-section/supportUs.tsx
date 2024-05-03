import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import {
  HiArrowTopRightOnSquareOutline,
  HiHeartSolid,
} from "@qwikest/icons/heroicons";

export const SupportUs = component$(() => {
  return (
    <div
      aria-label="Conatiner for Support us link"
      class="support-us-container"
    >
      <h4>
        <span>
          <HiHeartSolid />
        </span>
        Support our work: <Link>Donate now!</Link>
        <span>
          <HiArrowTopRightOnSquareOutline />
        </span>
      </h4>
    </div>
  );
});
