"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "@/components/shared/lang-provider";
import type { InstallSteps } from "@/lib/projects";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  function copy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    const btn = btnRef.current;
    if (btn) {
      btn.classList.remove("animate-spin-once");
      void btn.offsetWidth;
      btn.classList.add("animate-spin-once");
    }
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      ref={btnRef}
      onClick={copy}
      aria-label="Copier"
      className="flex-shrink-0 p-1 rounded text-foreground-muted hover:text-foreground transition-colors duration-150"
    >
      <FontAwesomeIcon
        icon={copied ? faCheck : faCopy}
        className={`w-3.5 h-3.5 ${copied ? "text-accent" : ""}`}
      />
    </button>
  );
}

function CodeLine({ code }: { code: string }) {
  return (
    <div className="flex items-center justify-between gap-2 bg-background rounded-[6px] px-3 py-2.5 font-mono text-sm text-foreground border border-border">
      <span className="truncate">{code}</span>
      <CopyButton text={code} />
    </div>
  );
}

interface InstallModalProps {
  open: boolean;
  onClose: () => void;
  install: InstallSteps;
}

export function InstallModal({ open, onClose, install }: InstallModalProps) {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setClosing(false);
      setVisible(true);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      onClose();
    }, 360);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") handleClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm ${closing ? "animate-backdrop-out" : "animate-backdrop-in"}`}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={`relative w-full max-w-md bg-background-card border border-border rounded-2xl p-6 shadow-2xl ${closing ? "animate-modal-out" : "animate-modal-in"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-foreground">{t.card.installTitle}</h2>
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-8 h-8 rounded-[8px] text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-all duration-150"
          >
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
          </button>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wide">{t.card.step1}</p>
          <CodeLine code={install.step1} />
          <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mt-1">{t.card.step2}</p>
          <CodeLine code={install.step2a} />
          <div className="flex items-center gap-3 text-xs text-foreground-muted">
            <div className="flex-1 h-px bg-border" />
            {t.card.or}
            <div className="flex-1 h-px bg-border" />
          </div>
          <CodeLine code={install.step2b} />
        </div>
      </div>
    </div>
  );
}
