// About.jsx

import { motion } from "framer-motion";

export default function About() {
  const infoCards = [
    {
      icon: "🎓",
      title: "Education",
      description: "ICT, Prince of Songkla University",
      color: "from-purple-500/20 to-pink-500/10",
      text: "text-purple-300",
    },
    {
      icon: "💻",
      title: "Focus",
      description: "Software Engineer • Data Analytics • UI/UX Design",
      color: "from-cyan-500/20 to-blue-500/10",
      text: "text-cyan-300",
    },
    {
      icon: "🚀",
      title: "Goal",
      description: "Build impactful and user-centered applications",
      color: "from-pink-500/20 to-purple-500/10",
      text: "text-pink-300",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-600/15 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-pink-500/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-purple-400 mb-4">
            Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* MAIN */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            overflow-hidden
            shadow-[0_0_80px_rgba(168,85,247,0.12)]
          "
        >
          {/* hologram overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>

          {/* glow line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>

          <div className="relative grid lg:grid-cols-[1.4fr_0.9fr] gap-16 items-center p-6 md:p-10">
            {/* LEFT */}
            <div>
              {/* heading */}
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-black leading-tight"
              >
                Building modern{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  digital experiences
                </span>{" "}
                with creativity & technology.
              </motion.h3>

              {/* description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="space-y-5 mt-8"
              >
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  My name is{" "}
                  <span className="text-purple-300 font-semibold">
                    Siriratri Uttamamunee
                  </span>
                  , also known as Pray, a 22-year-old developer from Songkhla,
                  Thailand. I am currently pursuing a Bachelor's degree in
                  Information and Communication Technology at Prince of Songkla
                  University, expected to graduate in 2025.
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  I specialize in{" "}
                  <span className="text-cyan-300">Software Engineer</span>,{" "}
                  <span className="text-pink-300">Data Analytics</span>, and{" "}
                  <span className="text-purple-300">UI/UX Design</span>, with
                  hands-on experience in building web applications, integrating
                  APIs, and developing interactive dashboards for data-driven
                  insights.
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  I am passionate about technology, creativity, and continuous
                  self-development. My goal is to grow as a developer and create
                  meaningful, user-focused applications that solve real-world
                  problems.
                </p>
              </motion.div>

              {/* INFO CARDS */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 max-w-[760px]"
              >
                {infoCards.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -4,
                      scale: 1.015,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 14,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      px-4
                      py-4
                    "
                  >
                    {/* hover glow */}
                    <div
                      className={`
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-500
                        bg-gradient-to-br
                        ${item.color}
                      `}
                    ></div>

                    {/* border shine */}
                    <div className="absolute inset-[1px] rounded-2xl border border-white/5"></div>

                    <div className="relative z-10">
                      {/* top */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                          {item.icon}
                        </div>

                        <h4
                          className={`text-sm font-bold tracking-wide ${item.text}`}
                        >
                          {item.title}
                        </h4>
                      </div>

                      {/* desc */}
                      <p className="text-[11px] leading-relaxed text-gray-300">
                        {item.description}
                      </p>
                    </div>

                    {/* reflection */}
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/[0.05] to-transparent"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative flex justify-center items-start">
              {/* hook */}
              <div className="absolute top-0 flex flex-col items-center z-20">
                <div className="w-4 h-4 rounded-full border border-purple-400 bg-black shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>

                <div className="w-[2px] h-20 bg-gradient-to-b from-purple-400 to-transparent"></div>
              </div>

              {/* floating card */}
              <motion.div
                animate={{
                  rotate: [-4, 4, -4],
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: 0,
                }}
                className="relative mt-14 origin-top"
              >
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-cyan-500/20 blur-3xl rounded-[32px]"></div>

                {/* CARD */}
                <div className="relative w-[250px] rounded-[32px] overflow-hidden border border-white/10 bg-[#111318]/90 backdrop-blur-2xl shadow-2xl">
                  {/* shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>

                  {/* top */}
                  <div className="relative p-5">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] tracking-[0.3em] uppercase text-purple-300">
                          Portfolio
                        </p>

                        <h3 className="text-xl font-black mt-3 leading-tight">
                          Software
                          <br />
                          Engineer
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg shadow-lg">
                        ✦
                      </div>
                    </div>
                  </div>

                  {/* center */}
                  <div className="relative px-5">
                    <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-cyan-500/10 p-5">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Frontend Development • Data Analytics • Dashboard
                        Systems • UI/UX Design
                      </p>

                      {/* tags */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {[
                          "React",
                          "Next.js",
                          "Vue",
                          "Tailwind",
                          "Power BI",
                        ].map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-[11px] border border-white/10 bg-white/5 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* bottom */}
                  <div className="relative px-5 py-5 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-gray-500">Status</p>

                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                        <span className="text-xs text-gray-300">Available</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] text-gray-500">Location</p>

                      <p className="text-xs text-gray-300">
                        Songkhla, Thailand
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
