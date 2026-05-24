import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer (Co-operative Education)",
    company: "Sri Trang Agro-Industry PCL (STA Group)",
    period: "Nov 2025 – Mar 2026",
    details: [
      "Developed an internal Product & Order Management Dashboard using Vue.js, Vuetify, and Pinia",
      "Built responsive and user-friendly interfaces across multiple devices",
      "Integrated RESTful APIs for real-time data handling and system communication",
      "Implemented key modules: Product, Order, Delete History, and BI Dashboard",
      "Utilized Docker, Postman, Sourcetree, and K2 Designer in a real-world workflow",
    ],
  },

  {
    title: "Database System Development Assistant (Intern)",
    company: "PSU Alumni Association",
    period: "Apr 2025 – Jun 2025",
    details: [
      "Developed a web-based Alumni Database System using Next.js",
      "Designed intuitive UI/UX and supported frontend development",
      "Assisted in system operations, documentation, and event coordination",
      "Contributed to digital media and public relations materials",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_30%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-purple-400 text-xs mb-3">
            Career Journey
          </p>

          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden md:block w-[2px] h-full bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-pink-500/0 -translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`
                  relative
                  flex
                  flex-col
                  md:flex-row
                  items-center
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >
                {/* TIMELINE DOT */}
                <div
                  className="
                    hidden md:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-5
                    h-5
                    rounded-full
                    border
                    border-purple-400/40
                    bg-black
                    items-center
                    justify-center
                    z-20
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse" />
                </div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 14,
                  }}
                  className={`
                    relative
                    w-full
                    md:w-[46%]
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-2xl
                    overflow-hidden
                    shadow-[0_0_50px_rgba(168,85,247,0.08)]
                  `}
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />

                  {/* top light */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

                  <div className="relative p-6 md:p-7">
                    {/* PERIOD */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-gray-300 mb-5">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      {exp.period}
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {exp.title}
                    </h3>

                    {/* COMPANY */}
                    <p className="mt-2 text-sm text-purple-300 font-medium">
                      {exp.company}
                    </p>

                    {/* DIVIDER */}
                    <div className="my-5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* DETAILS */}
                    <ul className="space-y-3">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
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
