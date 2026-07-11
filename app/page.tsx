import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ContentWrapper } from "@/components/shared/content-wrapper";

export default function Home() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen overflow-hidden bg-background text-foreground focus:outline-none"
      >
        <ContentWrapper>
          <HeroSection />
          <ProjectsSection />
        </ContentWrapper>
      </main>
      <Footer year={currentYear} />
    </>
  );
}
