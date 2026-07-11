"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  t: (typeof translations)[Lang];
  toggle: () => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const LANG_STORAGE_KEY = "lang";
const LANG_CHANGE_EVENT = "nxtaigen:lang-change";
let volatileLang: Lang = "fr";

const LangContext = createContext<LangContextValue>({
  lang: "fr",
  t: translations.fr,
  toggle: () => {},
  contentRef: { current: null },
});

function subscribeToLang(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_CHANGE_EVENT, callback);
  };
}

function getLangSnapshot(): Lang {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
  } catch {
    // Fall through to the in-memory preference.
  }
  return volatileLang;
}

function getServerLangSnapshot(): Lang {
  return "fr";
}

function persistLang(lang: Lang) {
  volatileLang = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // The in-memory preference still updates the current page.
  }
  window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
}

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeToLang,
    getLangSnapshot,
    getServerLangSnapshot
  );
  const contentRef = useRef<HTMLDivElement>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    const meta = translations[lang].meta;
    document.title = meta.title;

    const descriptions = [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
    ];
    const titles = [
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
    ];

    descriptions.forEach((selector) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", meta.description);
    });
    titles.forEach((selector) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", meta.title);
    });

  }, [lang]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  function toggle() {
    const next: Lang = lang === "fr" ? "en" : "fr";
    const content = contentRef.current;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      persistLang(next);
      return;
    }

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    if (!content) {
      persistLang(next);
      return;
    }

    content.style.transition = "opacity 120ms linear";
    content.style.opacity = "0.45";
    transitionTimeoutRef.current = window.setTimeout(() => {
      persistLang(next);
      content.style.transition = "opacity 220ms ease-out";
      content.style.opacity = "1";
      transitionTimeoutRef.current = null;
    }, 120);
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle, contentRef }}>
      {children}
    </LangContext.Provider>
  );
}
