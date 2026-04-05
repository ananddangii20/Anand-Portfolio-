import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    icon: "👶",
    title: "Early Life",
    place: "Mumbai, India",
    year: "2006",
    desc: "An introverted and curious kid from Mumbai, quietly exploring the world and developing a natural interest in how things work.",
  },
  {
    icon: "🏫",
    title: "SSC (School)",
    place: "Guru Nanak Mission High School",
    year: "2022",
    desc: "Completed secondary education with strong academic performance.",
    percentage: "85.80%",
  },
  {
    icon: "🎓",
    title: "HSC (Junior College)",
    place: "Bhavan's College, Andheri",
    year: "2022 - 2024",
    desc: "Focused on science and analytical thinking.",
    percentage: "82.67%",
  },  {
    icon: "📘",
    title: "MHT-CET Examination",
    place: "Maharashtra State Board",
    year: "2024",
    desc: "Appeared for MHT-CET with focus on Physics, Chemistry, and Mathematics",
    percentage: "97.63 Percentile",
  },
  {
    icon: "💻",
    title: "Engineering (B.E. IT)",
    place: "Thakur College of Engineering and Technology",
    year: "2024 - Present",
    desc: "Building real-world projects in AI & full stack development.",
    percentage: "CGPA: 9.8 / 9.9 / 9.7",
  },
];

const StorySection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section id="story" ref={ref} className="py-20 px-4 relative">
      
      {/* Title */}
      <div className="text-center mb-14">
        <p className="text-sm text-primary tracking-widest uppercase mb-2">
          My Journey
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">My Story</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Base Line (responsive) */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-white/10 md:-translate-x-1/2" />

        {/* Animated Line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 md:left-1/2 top-0 origin-top h-full w-[2px] bg-gradient-to-b from-primary via-primary to-transparent md:-translate-x-1/2"
        />

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`group relative w-full md:w-[45%] ml-10 md:ml-0`}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -left-20 top-0 w-40 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[shine_2s_linear]" />
                </div>

                {/* Content */}
                <div className="text-2xl mb-2">{item.icon}</div>

                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-1">
                  {item.place}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground/90">
                  {item.desc}
                </p>

                <div className="flex justify-between mt-4 text-xs md:text-sm">
                  <span className="text-primary font-medium">
                    {item.percentage}
                  </span>
                  <span className="text-muted-foreground">
                    {item.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default StorySection;