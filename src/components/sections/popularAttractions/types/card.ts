import type { Attractions } from "~/types/api";

export type AttractionStoreDataType = {
  attractions: Attractions[];
  lastDoc: string;
};
