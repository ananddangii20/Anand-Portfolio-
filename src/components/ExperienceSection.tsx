import { motion } from "framer-motion";

const posts = [
  {
    title: "Post 01",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7445334729459007488?collapsed=1",
  },
  {
    title: "Post 02",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7431726744698748928?collapsed=1",
  },
  {
    title: "Post 03",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7424116421925974016?collapsed=1",
  },
  {
    title: "Post 04",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7421429648942772224?collapsed=1",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4">
      
      <div className="text-center mb-14">
        <p className="text-sm text-primary uppercase tracking-widest mb-2">
          Journey & Highlights
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          LinkedIn Posts
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40">

              {/* SAME SIZE FRAME */}
              <div className="w-full h-[520px] overflow-hidden">
                <iframe
                  src={post.link}
                  className="w-full h-[900px] scale-[0.9] origin-top"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              {/* Footer */}
              <div className="p-4 text-sm border-t border-white/10 flex justify-between">
                <span className="text-muted-foreground">
                  {post.title}
                </span>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  View →
                </a>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ExperienceSection;