import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GradientOrbs } from "@/components/shared/gradient-orbs";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ContentWrapper } from "@/components/shared/content-wrapper";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen flex flex-col">
      <GradientOrbs />
      <Navbar />
      <ContentWrapper>
        <HeroSection />
        <ProjectsSection />
      </ContentWrapper>
      <Footer />
    </main>
  );
}
