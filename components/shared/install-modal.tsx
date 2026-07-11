"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "@/components/shared/lang-provider";
import { Button } from "@/components/ui/button";
import type { InstallSteps } from "@/lib/projects";

function CopyButton({ text }: { text: string }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, 1600);
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      onClick={copy}
      aria-label={copied ? t.card.copied : t.card.copy}
    >
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
    </Button>
  );
}

function CodeLine({ code }: { code: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-md bg-surface-deep py-1 pl-3 pr-1 ring-1 ring-border">
      <code className="min-w-0 flex-1 overflow-x-auto py-2 font-mono text-xs text-foreground sm:text-sm">
        {code}
      </code>
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="animate-modal-in m-auto w-[min(92vw,34rem)] rounded-xl bg-surface p-0 text-foreground ring-1 ring-border backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      aria-labelledby="install-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-foreground-muted">NxtUpdate</p>
            <h2
              id="install-modal-title"
              className="mt-2 text-2xl font-bold tracking-[-0.025em]"
            >
              {t.card.installTitle}
            </h2>
          </div>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={onClose}
            aria-label={t.card.close}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>

        <div className="mt-7 flex flex-col gap-4">
          <div>
            <p className="mb-2 font-mono text-xs font-semibold text-foreground-muted">
              {t.card.step1}
            </p>
            <CodeLine code={install.step1} />
          </div>

          <div>
            <p className="mb-2 font-mono text-xs font-semibold text-foreground-muted">
              {t.card.step2}
            </p>
            <CodeLine code={install.step2a} />
            <div className="my-3 flex items-center gap-3 font-mono text-xs text-foreground-muted">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              {t.card.or}
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <CodeLine code={install.step2b} />
          </div>
        </div>
      </div>
    </dialog>
  );
}
