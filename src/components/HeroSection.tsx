import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import FuzzyText from './FuzzyText';

const roles = ["IT Student ", " Exploring AI", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Hi, I'm
            </p>


            <h1 className="mb-4">
              <FuzzyText
                fontSize="clamp(2.1rem, 6vw, 4.4rem)"
                fontWeight={700}
                baseIntensity={0.07}
                hoverIntensity={0.18}
                transitionDuration={120}
                className="w-full max-w-[34rem] h-auto"
                enableHover
              >
                Anand Dangi
              </FuzzyText>
            </h1>

            <div className="h-8 mb-6 animate-fade-up" style={{ animationDelay: "180ms" }}>
              <span className="text-base md:text-lg text-muted-foreground">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md animate-fade-up" style={{ animationDelay: "240ms" }}>
            I’m a curious developer focused on learning, building, and experimenting with modern technologies to create meaningful and practical solutions.
            </p>
            <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm transition-all duration-200 hover:bg-secondary"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[22rem] md:max-w-[26rem]">
              <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl animate-float-soft" />
              <div className="relative h-[22rem] md:h-[26rem] rounded-[2.2rem] border border-white/10 bg-card/35 backdrop-blur-lg p-2">
                <img
                  src={profileImg}
                  alt="Alex Morgan"
                  className="w-full h-full object-contain object-center rounded-[1.8rem]"
                  width={768}
                  height={896}
                />
              </div>
              <div className="absolute -inset-2 rounded-[2.4rem] border border-white/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
