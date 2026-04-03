import { motion } from "framer-motion";
import {
  Blocks,
  BrainCircuit,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: BrainCircuit,
    tone: "text-yellow-300",
    desc: "Scripting, backend logic & AI integration",
  },
  {
    name: "JavaScript",
    icon: Blocks,
    tone: "text-yellow-400",
    desc: "Core language for web development",
  },
  {
    name: "Node.js",
    icon: Server,
    tone: "text-green-300",
    desc: "Backend APIs & server-side logic",
  },
  {
    name: "Express.js",
    icon: Server,
    tone: "text-emerald-300",
    desc: "REST API development",
  },
  {
    name: "MongoDB",
    icon: Database,
    tone: "text-green-400",
    desc: "NoSQL database management",
  },
  {
    name: "SQL",
    icon: Database,
    tone: "text-blue-300",
    desc: "Structured data & queries",
  },
  {
    name: "React",
    icon: Blocks,
    tone: "text-cyan-300",
    desc: "Frontend UI development",
  },
  {
    name: "Git",
    icon: GitBranch,
    tone: "text-orange-300",
    desc: "Version control & collaboration",
  },
];

const SkillsSection = () => (
  <section id="skills" className="relative py-20 px-4">
    
    <div className="max-w-6xl mx-auto">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Skills
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Technologies I work with.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-secondary/80 border border-white/10 flex items-center justify-center mb-4 ${skill.tone}`}>
              <skill.icon className="w-6 h-6" />
            </div>

            {/* Title */}
            <h3 className="text-sm md:text-base font-semibold leading-snug">
              {skill.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-muted-foreground mt-1">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;