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
      "Utilized tools such as Docker, Postman, Sourcetree, and K2 Designer in a real-world development workflow",
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
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Work Experience
        </motion.h2>

        {/* Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-start gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div className="relative w-full md:w-1/2 group">
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-800 hover:border-purple-500 transition shadow-xl hover:shadow-purple-500/20">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-purple-400">
                    {exp.title}
                  </h3>

                  {/* Company + time */}
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-400">
                    <span>{exp.company}</span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                      {exp.period}
                    </span>
                  </div>

                  {/* divider */}
                  <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                  {/* details */}
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    {exp.details.map((d, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-purple-400 mt-[2px]">▹</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* side visual */}
              <div className="hidden md:flex w-1/2 justify-center items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
