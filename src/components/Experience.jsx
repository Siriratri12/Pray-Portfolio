import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer (Co-operative Education)",
    company: "Sri Trang Agro-Industry PCL (STA Group)",
    period: "Nov 2025 – Mar 2026",
    details: [
      "Developed internal Product & Order Dashboard using Vue.js",
      "Built responsive UI across multiple devices",
      "Integrated RESTful APIs for real-time data",
      "Implemented Product, Order, and BI modules",
      "Worked with Docker, Postman, Sourcetree",
    ],
  },

  {
    title: "Database System Development Assistant",
    company: "PSU Alumni Association",
    period: "Apr 2025 – Jun 2025",
    details: [
      "Developed Alumni Database System using Next.js",
      "Designed UI/UX and frontend interfaces",
      "Supported documentation and system operations",
      "Created digital media materials",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black py-16 text-white"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_30%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:65px_65px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.35em] text-purple-400 text-[11px] mb-3">
            Career Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden md:block w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className={`
                  relative flex flex-col md:flex-row items-center
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >
                {/* DOT */}
                <div
                  className="
                    hidden md:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-4 h-4
                    rounded-full
                    border border-purple-400/40
                    bg-black
                    items-center justify-center
                    z-20
                  "
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse" />
                </div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                  className="
                    relative
                    w-full
                    md:w-[43%]
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    overflow-hidden
                    shadow-[0_0_35px_rgba(168,85,247,0.08)]
                  "
                >
                  {/* hologram glow */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10" />

                  {/* top line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                  <div className="relative p-5">
                    {/* PERIOD */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] text-gray-300 mb-4">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      {exp.period}
                    </div>

                    {/* TITLE */}
                    <h3 className="text-base md:text-lg font-bold leading-snug">
                      {exp.title}
                    </h3>

                    {/* COMPANY */}
                    <p className="mt-1 text-sm text-purple-300">
                      {exp.company}
                    </p>

                    {/* divider */}
                    <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* DETAILS */}
                    <ul className="space-y-2.5">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[13px] text-gray-300 leading-relaxed"
                        >
                          <span className="text-cyan-400 mt-[1px]">✦</span>

                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
