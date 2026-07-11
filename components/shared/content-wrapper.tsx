"use client";

import { useLang } from "@/components/shared/lang-provider";

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { contentRef } = useLang();

  return (
    <div ref={contentRef} className="flex-1 pt-18">
      {children}
    </div>
  );
}
