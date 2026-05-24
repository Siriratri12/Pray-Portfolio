import { motion } from "framer-motion";

export default function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <p className="uppercase tracking-[0.35em] text-purple-400 text-xs mb-3">
        {subtitle}
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-black
          bg-gradient-to-r
          from-cyan-300
          via-purple-400
          to-pink-500
          bg-clip-text
          text-transparent
        "
      >
        {title}
      </h2>
    </motion.div>
  );
}