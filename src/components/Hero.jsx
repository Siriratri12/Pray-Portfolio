import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* CONTENT */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Siriratri Uttamamunee
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Software Developer • Data Analytics • UI/UX Designer
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* View Projects */}
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition shadow-lg"
        >
          View Projects
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-500/10 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
