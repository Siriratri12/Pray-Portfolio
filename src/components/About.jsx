import { motion } from "framer-motion";
import profile from "../assets/profile/รูปถ่าย.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Glow BG */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full top-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* 🖼 PROFILE */}
        <motion.div
          className="relative w-70 h-80 md:w-[360px] md:h-[480px] flex items-center justify-center bg-gray-900 rounded-2xl shadow-2xl flex-shrink-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 opacity-10 blur-2xl rounded-2xl"></div>

          <img
            src={profile}
            alt="profile"
            className="relative max-w-full max-h-full object-contain transition duration-500 hover:scale-105"
          />
        </motion.div>

        {/* 📄 CONTENT */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            I am{" "}
            <span className="text-purple-400 font-semibold">
              Siriratri Uttamamunee (Pray)
            </span>
            , a final-year Information and Communication Technology student at
            Prince of Songkla University, expected to graduate in 2025.
            <br />
            <br />I specialize in{" "}
            <span className="text-purple-400">Software Development</span>,{" "}
            <span className="text-purple-400">Data Analytics</span>, and{" "}
            <span className="text-purple-400">UI/UX Design</span>, with hands-on
            experience in building web applications, integrating RESTful APIs,
            and developing interactive dashboards for real-time data
            visualization and business insights.
            <br />
            <br />I am focused on creating efficient, user-centered systems and
            continuously improving my technical skills through real-world
            projects. My goal is to grow as a software engineer and contribute
            to building impactful digital solutions.
          </motion.p>
        </div>
      </div>

      {/* 🔥 HIGHLIGHT */}
      <motion.div
        className="mt-20 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="bg-gray-900/70 backdrop-blur p-6 rounded-xl">
          <h3 className="text-purple-400 font-bold">🎓 Education</h3>
          <p className="text-sm text-gray-400 mt-2">
            ICT, Prince of Songkla University
          </p>
        </div>

        <div className="bg-gray-900/70 backdrop-blur p-6 rounded-xl">
          <h3 className="text-purple-400 font-bold">💻 Focus</h3>
          <p className="text-sm text-gray-400 mt-2">
            Software Development • Data Analytics • UI/UX Design
          </p>
        </div>

        <div className="bg-gray-900/70 backdrop-blur p-6 rounded-xl">
          <h3 className="text-purple-400 font-bold">🚀 Goal</h3>
          <p className="text-sm text-gray-400 mt-2">
            Build impactful and user-centered applications
          </p>
        </div>
      </motion.div>
    </section>
  );
}
