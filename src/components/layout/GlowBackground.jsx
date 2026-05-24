import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
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
        className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-cyan-400/15 blur-3xl"
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
        className="absolute bottom-[-200px] right-[-100px] w-[550px] h-[550px] rounded-full bg-purple-500/15 blur-3xl"
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
        className="absolute top-[20%] right-[25%] w-[300px] h-[300px] rounded-full bg-pink-500/15 blur-3xl"
      />

      {/* hologram mesh */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_35%)]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/10" />
    </div>
  );
}