import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Have a project in mind? Let's talk.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <textarea
            placeholder="Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social */}
        <div className="flex justify-center gap-6 mt-10">
          {[
            { label: "GitHub", href: "https://github.com/ananddangii20" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ananddangi/" },
            { label: "X.com", href: "https://x.com/_ananddangi_" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
