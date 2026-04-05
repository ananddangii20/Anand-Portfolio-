import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "LegalDost AI",
    desc: "AI-powered legal contract risk analyzer.",
    image: "/legaldost.png",
    tech: ["Python", "Gemini API", "NLP"],
    details:
      "Built an intelligent system that analyzes legal contracts, identifies risky clauses, extracts key information, and simplifies complex legal language for better understanding. Designed APIs for document upload and automated analysis.",
    github: "https://github.com/ananddangii20/Legal_Dost",
    live: "#",
  },
  {
    title: "CivicSeva AI",
    desc: "AI-powered civic issue reporting platform.",
    image: "/civicseva.png",
    tech: ["MERN", "Gemini API", "REST APIs"],
    details:
      "Developed a platform for citizens to report civic issues and track complaint status. Implemented AI-based categorization to automatically route complaints to the appropriate department.",
    github: "https://github.com/ananddangii20/CivicSevaAi",
    live: "#",
  },
  {
    title: "SastaSauda",
    desc: "AI-enabled digital marketplace for farmers.",
    image: "/sastasauda.png",
    tech: ["Node.js", "MongoDB", "Express", "Azure AI"],
    details:
      "Created a marketplace enabling direct trade between farmers and buyers. Integrated AI-based image verification to ensure product quality and built backend APIs for listings and user management.",
    github: "https://github.com/ananddangii20/Sasta_Sauda",
    live: "#",
  },
  {
    title: "CloudSaviour",
    desc: "AI-based cloud server monitoring system.",
    image: "/cloudsaviour.png",
    tech: ["Python", "Docker", "n8n", "AI"],
    details:
      "Built a system to monitor cloud servers, detect anomalies in real time, and alert users about potential failures using AI-driven analysis and automated workflows.",
    github: "https://github.com/ananddangii20/Cloud_Saviour",
    live: "#",
  }, {
    title: "News4U",
    desc: "AI-powered personalized news browser extension.",
    image: "/news4u.png",
    tech: ["JavaScript", "Chrome Extension", "API", "AI"],
    details:
      "Developed a browser extension that delivers personalized news based on user interests. Implemented smart filtering and categorization to provide relevant and distraction-free content directly within the browser.",
    github: "https://github.com/ananddangii20/News4u",
    live: "#",
  },
];

const ProjectsSection = () => {
  const { toast } = useToast();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const isLinkMissing = (link: string) => !link || link === "#";

  const handleLiveDemoClick = (event: React.MouseEvent<HTMLAnchorElement>, title: string, link: string) => {
    if (!isLinkMissing(link)) {
      return;
    }

    event.preventDefault();
    toast({
      title: "Live demo is not available",
      description: `${title} does not have a published live demo yet.`,
      variant: "destructive",
    });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        api.scrollNext();
      }
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [api]);

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Projects</h2>
          <p className="text-muted-foreground max-w-md mx-auto">One spotlight project at a time. Swipe to explore more.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, i) => (
                <CarouselItem key={project.title} className="flex">
                  <article className="glass-card animate-fade-up flex h-[760px] w-full overflow-hidden md:h-[700px] lg:h-[500px]">
                    <div className="grid h-full w-full lg:grid-cols-2">
                      <div className="relative min-h-[260px] overflow-hidden lg:h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/30" />
                      </div>

                      <div className="flex h-full flex-col justify-center overflow-y-auto p-6 md:p-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-3">
                          Project {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{project.title}</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{project.desc}</p>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.details}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-300"
                          >
                            GitHub
                          </a>
                          <a
                            href={project.live}
                            onClick={(event) => handleLiveDemoClick(event, project.title, project.live)}
                            target={isLinkMissing(project.live) ? undefined : "_blank"}
                            rel={isLinkMissing(project.live) ? undefined : "noreferrer"}
                            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-3 md:left-5 h-10 w-10 border-white/15 bg-background/75 backdrop-blur-sm hover:bg-background" />
            <CarouselNext className="right-3 md:right-5 h-10 w-10 border-white/15 bg-background/75 backdrop-blur-sm hover:bg-background" />
          </Carousel>

          <div className="mt-6 flex items-center justify-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.title}
                aria-label={`Go to ${project.title}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                  }`}
              />
            ))}
          </div>

          <div className="mt-4 h-1.5 max-w-40 mx-auto rounded-full bg-white/10 overflow-hidden">
            <motion.div
              key={current}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
