"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  t: (typeof translations)[Lang];
  toggle: () => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const LangContext = createContext<LangContextValue>({
  lang: "fr",
  t: translations.fr,
  toggle: () => {},
  contentRef: { current: null },
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "fr") setLang(stored);
  }, []);

  function toggle() {
    const next: Lang = lang === "fr" ? "en" : "fr";
    const el = contentRef.current;

    if (el) {
      el.style.transition = "opacity 0.16s linear";
      el.style.opacity = "0";
      setTimeout(() => {
        setLang(next);
        localStorage.setItem("lang", next);
        el.style.transition = "opacity 0.26s ease-out";
        el.style.opacity = "1";
      }, 160);
    } else {
      setLang(next);
      localStorage.setItem("lang", next);
    }
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle, contentRef }}>
      {children}
    </LangContext.Provider>
  );
}
