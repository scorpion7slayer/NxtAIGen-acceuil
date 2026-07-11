"use client";

import { useLang } from "@/components/shared/lang-provider";
import { Button } from "@/components/ui/button";

export function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={toggle}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
    >
      <span className="font-mono text-[0.68rem]">{lang === "fr" ? "EN" : "FR"}</span>
    </Button>
  );
}
