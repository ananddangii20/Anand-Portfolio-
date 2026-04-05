import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const achievements = [
  {
    type: "certificate",
    title: "Participated in 48 hours Online Hackathon",
    issuer: "TuteDude",
    date: "July 2025",
    description: "Participated in 48 hours online hackathon by tutedude",
    image: "/tutedude.png",
  },
  {
    type: "certificate",
    title: "Participated in GDG 18 hours Hackathon",
    issuer: "GDG Mumbai ",
    date: "Jan 2026",
    description: "Participated in 18 hours offline hackathon",
    image: "/gdg.png",
  },
  {
    type: "achievement",
    title: "Special Mention Award",
    issuer: "Codelite 2.0 - Pune",
    date: "Feb 2026",
    description:
      "Received Special Emerging Award at Codelite 2.0 hackathon Pune with 5000rs cash prize",
    image: "/codelite.png",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm text-primary uppercase tracking-widest mb-2">
          Recognition & Growth
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Achievements & Certificates
        </h2>
      </div>

      {/* Scroll Stack */}
      <div className="max-w-5xl mx-auto">
        <ScrollStack>
          {achievements.map((item, index) => (
            <ScrollStackItem key={index}>
              <div className="flex justify-center px-2">
                
                {/* FIX 1: Changed fixed width/height to responsive sizing 
                  (w-full, max-w-[800px], responsive heights for mobile/desktop)
                */}
                <div className="group relative w-full max-w-[800px] h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                  
                  {/* FIX 2: Removed 'bg-white' from the image to get rid of the white bars.
                    Kept object-contain so certificates don't get cropped. 
                  */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />

                  {/* FIX 3: Made the gradient much darker at the bottom for text readability.
                    Swapped black/80 and black/40 for solid black and black/70.
                  */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 p-6 md:p-8 w-full text-white">
                    {/* Badge */}
                    <span
                      className={`inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold uppercase tracking-wide ${
                        item.type === "achievement"
                          ? "bg-yellow-500 text-black"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {item.type}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-1">
                      {item.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm opacity-80 mb-2">
                      {item.issuer} • {item.date}
                    </p>

                    {/* Description */}
                    <p className="text-xs md:text-sm opacity-90 max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default AchievementsSection;