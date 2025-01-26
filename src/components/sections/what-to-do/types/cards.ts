import type { Articles } from "~/types/api";

export type ArticleStoreDataType = {
  articles: Articles[];
  lastDoc: string;
};
