"use client";

export function GradientOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-5 dark:opacity-25"
    >
      {/* Orb 1 — orange accent, top left */}
      <div
        className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full animate-float-orb"
        style={{
          background:
            "radial-gradient(circle, rgba(63, 0, 113, 0.7) 0%, transparent 70%)",
          animationDuration: "12s",
        }}
      />
      {/* Orb 2 — warm amber, top right */}
      <div
        className="absolute -top-24 -right-48 w-[500px] h-[500px] rounded-full animate-float-orb"
        style={{
          background:
            "radial-gradient(circle, rgba(155, 48, 212, 0.4) 0%, transparent 70%)",
          animationDuration: "16s",
          animationDelay: "-4s",
          animationDirection: "reverse",
        }}
      />
      {/* Orb 3 — subtle, bottom center */}
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full animate-float-orb"
        style={{
          background:
            "radial-gradient(circle, rgba(63, 0, 113, 0.3) 0%, transparent 70%)",
          animationDuration: "20s",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
}
