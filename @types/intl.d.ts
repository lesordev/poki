import en from "@/translate/en.json";

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
