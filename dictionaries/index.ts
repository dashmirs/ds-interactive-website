import { en } from "./en";
import { de } from "./de";
import { sq } from "./sq";

const dictionaries = {
  en,
  de,
  sq,
};

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ["en", "de", "sq"];
export const defaultLocale: Locale = "en";

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
};
