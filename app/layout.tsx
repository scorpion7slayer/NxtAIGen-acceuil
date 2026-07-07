import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/shared/lang-provider";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://nxtaigen.com"),
  title: "NxtAIGen — AI-Powered Dev Tools",
  description:
    "Découvrez l'écosystème NxtAIGen : des outils open source propulsés par l'IA pour les développeurs modernes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NxtAIGen — AI-Powered Dev Tools",
    description:
      "Découvrez l'écosystème NxtAIGen : des outils open source propulsés par l'IA pour les développeurs modernes.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          src="https://rybbit.nxtaigen.com/api/script.js"
          data-site-id="ae2c3c3258dd"
          defer
        ></script>
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
