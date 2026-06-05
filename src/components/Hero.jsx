// Hero.jsx

import { motion } from "framer-motion";
import { useState } from "react";
import profile from "../assets/profile/รูปถ่าย.jpg";

export default function Hero() {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  // 🌀 FREE 3D ROTATION
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // stronger & more free rotation
    const rotateY = ((x - centerX) / centerX) * 22;
    const rotateX = -((y - centerY) / centerY) * 22;

    setRotate({
      x: rotateX,
      y: rotateY,
    });
  };

  const resetRotate = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    const yOffset = -80;

    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center px-6 pt-24"
    >
      {/* 🌈 HOLOGRAM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* glow 1 */}
        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -50, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-3xl"
        />

        {/* glow 2 */}
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-200px] right-[-100px] w-[550px] h-[550px] rounded-full bg-purple-500/20 blur-3xl"
        />

        {/* glow 3 */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[25%] w-[300px] h-[300px] rounded-full bg-pink-500/20 blur-3xl"
        />

        {/* hologram mesh */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_35%)]" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/10" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            <span className="text-sm text-gray-300">
              Available for Full-time Opportunities
            </span>
          </div>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Pray
            </span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-300 font-medium">
            Software Engineer & Data Analytics and UX/UI Desig
          </h2>

          {/* description */}
          <p className="mt-8 text-gray-400 leading-relaxed max-w-xl text-base md:text-lg">
            {/* Graduated with a Bachelor’s degree in Information and Communication
            Technology from Prince of Songkla University in 2025. Passionate
            about Software Engineering, Frontend Development, and UI/UX Design,
            with hands-on experience in developing web applications, dashboards,
            and business systems using React, Vue.js, Next.js, JavaScript, and
            SQL. Strong interest in building responsive, user-centered digital
            products while continuously improving technical and problem-solving
            skills. */}
            Information and Communication Technology graduate from Prince of
            Songkla University (2025) with experience in developing web
            applications, dashboards, and business systems. Skilled in React,
            Vue.js, Next.js, JavaScript, and SQL, with a strong interest in
            software development, data visualization, and user-centered digital
            experiences.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => handleScroll("projects")}
              className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
            >
              Explore Projects
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="px-7 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-400 hover:text-purple-400 transition duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-10 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-cyan-300">22</h3>
              <p className="text-sm text-gray-400 mt-1">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">2</h3>
              <p className="text-sm text-gray-400 mt-1">Experiences</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-400">2025</h3>
              <p className="text-sm text-gray-400 mt-1">Graduate</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center perspective-[3000px]"
        >
          {/* hologram glow */}
          <div className="absolute w-[320px] h-[320px] bg-cyan-400/10 blur-[100px] rounded-full animate-pulse" />

          {/* 🃏 INTERACTIVE CARD */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotate}
            animate={{
              rotateX: rotate.x,
              rotateY: rotate.y,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              mass: 0.6,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="relative w-[280px] md:w-[320px] rounded-[34px] overflow-hidden border border-white/10 bg-black/30 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.25)]"
          >
            {/* hologram layer */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.35),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,0,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,255,180,0.25),transparent_30%)]" />

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

              <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>

            {/* animated shine */}
            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />

            {/* image */}
            <div
              className="relative p-4"
              style={{
                transform: "translateZ(60px)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                className="w-full h-[380px] object-cover rounded-[26px]"
              />
            </div>

            {/* content */}
            <div
              className="relative px-5 pb-5"
              style={{
                transform: "translateZ(70px)",
              }}
            >
              <h3 className="text-2xl font-bold tracking-wide">
                Siriratri Uttamamunee
              </h3>

              <p className="text-cyan-300 text-sm mt-1">Software Engineer</p>

              {/* bottom glass */}
              <div className="mt-5 flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="text-xs text-gray-500">Location</p>

                  <p className="text-sm text-white">Songkhla, Thailand</p>
                </div>

                <button
                  onClick={() => handleScroll("contact")}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black text-sm font-semibold hover:scale-105 transition"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* border glow */}
            <div className="absolute inset-0 rounded-[34px] border border-cyan-400/10 pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
