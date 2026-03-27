"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => setMounted(true), []);

  function handleToggle() {
    const icon = iconRef.current;
    if (icon) {
      icon.classList.remove("animate-spin-once");
      void icon.offsetWidth; // force reflow to restart animation
      icon.classList.add("animate-spin-once");
    }
    setTimeout(() => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, 225);
  }

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-9 h-9 rounded-[10px] text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-colors duration-200 cursor-pointer"
    >
      <span ref={iconRef} className="inline-flex items-center justify-center">
        <FontAwesomeIcon
          icon={resolvedTheme === "dark" ? faSun : faMoon}
          className="w-4 h-4"
        />
      </span>
    </button>
  );
}
