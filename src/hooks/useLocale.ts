import { useEffect, useState } from "react";
import type { Locale } from "../content/types";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("zh-TW");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return { locale, setLocale };
}
