import { useEffect, useState } from "react";
import type { Locale } from "../content/types";

const STORAGE_KEY = "resume-locale";

function getInitialLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "en" || saved === "zh-TW" ? saved : "zh-TW";
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return { locale, setLocale };
}
