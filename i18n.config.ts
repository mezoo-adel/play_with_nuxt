import { messages } from "@/lang";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ar',
    fallbackLocale:"en",
    messages: messages
  }));
  