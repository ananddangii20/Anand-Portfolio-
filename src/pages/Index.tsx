import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Galaxy from "@/components/Galaxy";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <div className="fixed inset-0 -z-20 opacity-95 pointer-events-none">
      <Galaxy />
    </div>

    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/18 via-background/12 to-background/38 pointer-events-none" />
    <div className="fixed inset-0 -z-10 bg-grid-soft opacity-[0.05] pointer-events-none" />
    <div className="fixed -top-20 -right-12 -z-10 w-[42rem] h-[42rem] rounded-full bg-primary/20 blur-3xl animate-aurora-slow pointer-events-none" />
    <div className="fixed -bottom-24 -left-16 -z-10 w-[34rem] h-[34rem] rounded-full bg-accent/20 blur-3xl animate-aurora-slow-delayed pointer-events-none" />

    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <ExperienceSection />
      <StorySection />
    <SkillsSection />
    <ContactSection />

    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/80 bg-background/50 backdrop-blur-sm">
      © 2026 Anand Dangi. Built with care.
    </footer>
  </div>
);

export default Index;