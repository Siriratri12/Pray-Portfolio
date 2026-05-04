import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-black text-white text-center overflow-hidden"
    >
      {/* 🔮 Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-[100px] bottom-[-150px] right-[-100px]" />

      {/* TITLE */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      {/* CONTACT GRID */}
      <motion.div
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {/* Email */}
        <a
          href="mailto:siriratri.u@gmail.com"
          className="group bg-gray-900/70 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 hover:border-purple-400 hover:scale-105 transition"
        >
          <p className="text-sm text-gray-400">📧 Email</p>
          <p className="font-semibold group-hover:text-purple-400">
            siriratri.u@gmail.com
          </p>
        </a>

        {/* Phone */}
        <a
          href="tel:0971328795"
          className="group bg-gray-900/70 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 hover:border-pink-400 hover:scale-105 transition"
        >
          <p className="text-sm text-gray-400">📱 Phone</p>
          <p className="font-semibold group-hover:text-pink-400">
            097-132-8795
          </p>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-900/70 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 hover:border-blue-400 hover:scale-105 transition"
        >
          <p className="text-sm text-gray-400">🌐 Facebook</p>
          <p className="font-semibold group-hover:text-blue-400">
            Siriratri Uttamamunee
          </p>
        </a>

        {/* Line */}
        <a
          href="https://line.me/ti/p/~srrt-u"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-900/70 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 hover:border-green-400 hover:scale-105 transition"
        >
          <p className="text-sm text-gray-400">💬 Line</p>
          <p className="font-semibold group-hover:text-green-400">srrt-u</p>
        </a>
      </motion.div>

      {/* 🚀 CTA */}
      <motion.div
        className="mt-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-gray-400 text-sm mb-6">
          Actively seeking a full-time role in{" "}
          <span className="text-purple-400 font-semibold">
            Software Development
          </span>{" "}
          ,{" "}
          <span className="text-pink-400 font-semibold">
            Data Analytics
          </span>{" "}
          and{" "}
          <span className="text-purple-400 font-semibold">UX/UI Designer</span>.
          Ready to contribute, learn, and grow in a professional environment.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:siriratri.u@gmail.com"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/30"
        >
          🚀 Hire Me
        </a>
      </motion.div>
    </section>
  );
}
