import { motion } from "framer-motion";
import profile from "../assets/profile/รูปถ่าย.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Glow BG */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full top-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* 🖼 PROFILE IMAGE (ไม่โดนตัด) */}
        <motion.div
          className="relative w-70 h-72 md:w-100 md:h-96 flex items-center justify-center bg-gray-900 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 opacity-10 blur-2xl rounded-2xl"></div>

          <img
            src={profile}
            alt="profile"
            className="relative max-w-full max-h-full object-contain 
            transition duration-500 hover:scale-105"
          />
        </motion.div>

        {/* 📄 CONTENT */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            My name is{" "}
            <span className="text-purple-400 font-semibold">
              Siriratri Uttamamunee
            </span>
            , also known as Pray, a 22-year-old developer from Songkhla,
            Thailand. I am currently pursuing a Bachelor's degree in Information
            and Communication Technology at Prince of Songkla University,
            expected to graduate in 2025.
            <br />
            <br />I specialize in{" "}
            <span className="text-purple-400">
              software development
            </span> and{" "}
            <span className="text-purple-400">data visualization</span>
            , with hands-on experience in building web applications, integrating
            APIs, and developing interactive dashboards for data-driven
            insights.
            <br />
            <br />I am passionate about technology, creativity, and continuous
            self-development. My goal is to grow as a developer and create
            meaningful, user-focused applications that solve real-world
            problems.
          </motion.p>
        </div>
      </div>

      {/* 🔥 HIGHLIGHT */}
      <motion.div
        className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
            Software Development • Data Visualization • UI/UX
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
