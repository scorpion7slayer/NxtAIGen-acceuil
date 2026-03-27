"use client";

import { useLang } from "@/components/shared/lang-provider";

export function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="flex items-center justify-center h-9 px-2.5 rounded-[10px] text-xs font-semibold text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-colors duration-200 cursor-pointer tracking-wide"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
