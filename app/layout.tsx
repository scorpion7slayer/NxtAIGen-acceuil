import type { Metadata } from "next";
import { Archivo, Azeret_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/shared/lang-provider";
import { translations } from "@/lib/i18n";

config.autoAddCss = false;

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
  display: "swap",
});

const defaultMeta = translations.fr.meta;

export const metadata: Metadata = {
  metadataBase: new URL("https://nxtaigen.com"),
  title: defaultMeta.title,
  description: defaultMeta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.description,
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
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${archivo.variable} ${azeretMono.variable} h-full antialiased`}
    >
      <head>
        <script
          src="https://rybbit.nxtaigen.com/api/script.js"
          data-site-id="ae2c3c3258dd"
          defer
        ></script>
      </head>
      <body className="min-h-full bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
