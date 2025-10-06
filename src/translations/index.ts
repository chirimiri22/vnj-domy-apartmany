import en from "./en.json";
import cz from "./cz.json";

export const translations = {
  en,
  cz,
};

export type TranslationKey = keyof typeof en;
export type Language = keyof typeof translations;

export default translations;
