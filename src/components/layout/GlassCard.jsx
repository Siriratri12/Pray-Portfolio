export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_10px_50px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {/* glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-br
          from-cyan-500/10
          via-purple-500/10
          to-pink-500/10
        "
      />

      {/* top light */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

      {/* border */}
      <div className="absolute inset-[1px] rounded-[30px] border border-white/5" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}