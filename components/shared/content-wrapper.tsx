"use client";

import { useLang } from "@/components/shared/lang-provider";

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { contentRef } = useLang();

  return (
    <div ref={contentRef} className="pt-16 flex-1">
      {children}
    </div>
  );
}
