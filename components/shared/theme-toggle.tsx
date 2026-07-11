"use client";

import { useRef, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useLang } from "@/components/shared/lang-provider";
import { Button } from "@/components/ui/button";

function subscribeToHydration() {
  return () => {};
}

function getClientHydrationSnapshot() {
  return true;
}

function getServerHydrationSnapshot() {
  return false;
}

export function ThemeToggle() {
  const { lang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const iconRef = useRef<HTMLSpanElement>(null);
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot
  );
  const isDark = resolvedTheme === "dark";
  const icon = hydrated ? (isDark ? faSun : faMoon) : faCircleHalfStroke;
  const label = hydrated
    ? lang === "fr"
      ? isDark
        ? "Passer au thème clair"
        : "Passer au thème sombre"
      : isDark
        ? "Switch to light theme"
        : "Switch to dark theme"
    : lang === "fr"
      ? "Changer de thème"
      : "Change theme";

  function handleToggle() {
    const icon = iconRef.current;
    if (icon) {
      icon.classList.remove("animate-spin-once");
      void icon.offsetWidth;
      icon.classList.add("animate-spin-once");
    }
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={handleToggle}
      aria-pressed={hydrated ? isDark : undefined}
      aria-label={label}
    >
      <span ref={iconRef} className="inline-flex items-center justify-center">
        <FontAwesomeIcon icon={icon} />
      </span>
    </Button>
  );
}
