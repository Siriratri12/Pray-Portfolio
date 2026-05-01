import { motion } from "framer-motion";

const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "Vue.js",
    "Vuetify",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  "Data Visualization": ["ECharts", "Chart.js", "Leaflet", "Power BI"],
  "Backend & Data": ["Node.js", "SQL", "C#", "Java", "C"],
  "Tools & Technologies": ["Docker", "Postman", "Sourcetree", "K2 Designer"],
  "UI/UX & Design": ["Figma", "Adobe Illustrator", "Canva"],
  Others: [
    "Microsoft Office",
    "CapCut",
    "Clipchamp",
    "draw.io",
    "Test Case Writing",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full bottom-[-100px] left-[-100px]" />

      <div className="max-w-6xl mx-auto text-center">
        {/* TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        {/* GRID (🔥 ใช้ stagger animation) */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400 transition"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {/* CATEGORY */}
              <h3 className="text-lg font-semibold mb-4 text-purple-400">
                {category}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3 justify-center">
                {items.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800 border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition"
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
