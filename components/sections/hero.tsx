"use client";

import { Container } from "@/components/layout/container";
import { useLang } from "@/components/shared/lang-provider";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
      <Container className="flex flex-col items-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-subtle border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
          {t.hero.badge}
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5 animate-fade-in-up"
          style={{ animationDelay: "80ms" }}
        >
          <span className="text-foreground">{t.hero.title} </span>
          <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
            {t.hero.titleAccent}
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-foreground-muted max-w-xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "160ms" }}
        >
          {t.hero.description}
        </p>
      </Container>
    </section>
  );
}
