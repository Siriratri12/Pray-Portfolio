import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Monitor,
  Database,
  Palette,
  Globe,
} from "lucide-react";

import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [filter, setFilter] = useState("⭐ All");

  // ESC + LOCK SCROLL
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
        setFullscreenImg(null);
      }
    };

    document.body.style.overflow =
      selected || fullscreenImg ? "hidden" : "auto";

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, [selected, fullscreenImg]);

  const openModal = (project) => {
    setSelected(project);
    setImgIndex(0);
  };

  // FILTER
  const filteredProjects =
    filter === "⭐ All"
      ? projects
      : projects.filter((p) => p.type === filter);

  const filters = [
    {
      label: "⭐ All",
      icon: null,
    },
    {
      label: "Web",
      icon: Globe,
    },
    {
      label: "System",
      icon: Monitor,
    },
    {
      label: "Dashboard",
      icon: Database,
    },
    {
      label: "Design",
      icon: Palette,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px]" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-pink-600/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs mb-3">
            Portfolio Showcase
          </p>

          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm leading-relaxed">
            A collection of software development, dashboard analytics,
            UI/UX design, and interactive web applications.
          </p>
        </motion.div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => setFilter(item.label)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full border
                  backdrop-blur-xl text-sm transition-all duration-300
                  ${
                    filter === item.label
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-black border-transparent shadow-lg shadow-purple-500/30"
                      : "border-white/10 bg-white/5 text-gray-300 hover:border-purple-400 hover:text-white"
                  }
                `}
              >
                {Icon && <Icon size={15} />}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* ================= GRID ================= */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                  group relative cursor-pointer
                  rounded-2xl overflow-hidden
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-purple-400/50
                  transition-all duration-300
                "
                onClick={() => openModal(p)}
              >
                {/* hologram glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10" />

                {/* image */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.images?.[0]}
                    alt={p.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* hologram scan */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute top-0 left-[-100%] w-[200%] h-[2px] bg-cyan-400/40 animate-pulse" />
                  </div>

                  {/* type */}
                  <span className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10 text-cyan-300">
                    {p.type}
                  </span>
                </div>

                {/* content */}
                <div className="relative p-4">
                  <h3 className="text-base font-bold mb-1 line-clamp-1 group-hover:text-purple-300 transition">
                    {p.title}
                  </h3>

                  <p className="text-xs text-purple-300 mb-2">
                    {p.tech}
                  </p>

                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                    {p.description}
                  </p>

                  {/* button */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-purple-300 font-medium">
                    View Project
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </div>
                </div>

                {/* hologram border */}
                <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 group-hover:border-cyan-400/30 pointer-events-none transition duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-xl flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* glow */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />

            <motion.div
              className="
                relative
                w-full
                max-w-3xl
                rounded-[28px]
                overflow-hidden
                border border-white/10
                bg-black/70
                backdrop-blur-2xl
                shadow-[0_0_60px_rgba(168,85,247,0.25)]
              "
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={selected.images?.[imgIndex]}
                  className="
                    w-full
                    h-[220px]
                    md:h-[280px]
                    object-cover
                    cursor-zoom-in
                  "
                  alt="project"
                  onClick={() =>
                    setFullscreenImg(selected.images[imgIndex])
                  }
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* arrows */}
                {selected.images?.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setImgIndex(
                          imgIndex === 0
                            ? selected.images.length - 1
                            : imgIndex - 1
                        )
                      }
                      className="
                        absolute left-4 top-1/2 -translate-y-1/2
                        w-10 h-10 rounded-full
                        bg-black/50 border border-white/10
                        hover:border-purple-400 transition
                      "
                    >
                      ◀
                    </button>

                    <button
                      onClick={() =>
                        setImgIndex(
                          imgIndex === selected.images.length - 1
                            ? 0
                            : imgIndex + 1
                        )
                      }
                      className="
                        absolute right-4 top-1/2 -translate-y-1/2
                        w-10 h-10 rounded-full
                        bg-black/50 border border-white/10
                        hover:border-purple-400 transition
                      "
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-2 p-3 overflow-x-auto bg-black/40">
                {selected.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setImgIndex(i)}
                    className={`
                      w-16 h-12 rounded-lg object-cover cursor-pointer transition
                      ${
                        i === imgIndex
                          ? "border border-purple-400 scale-105"
                          : "opacity-50 hover:opacity-100"
                      }
                    `}
                  />
                ))}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 border border-purple-400/30 text-purple-300">
                  {selected.type}
                </span>

                <h2 className="text-2xl font-black mt-4 mb-3 bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  {selected.title}
                </h2>

                <p className="text-cyan-300 text-sm mb-4">
                  {selected.tech}
                </p>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {selected.description}
                </p>

                {/* LINKS */}
                <div className="flex flex-wrap gap-3 mt-7">
                  {selected.github && selected.github !== "#" && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-2 rounded-xl
                        border border-white/10
                        bg-white/5
                        hover:border-purple-400
                        transition
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {selected.live && selected.live !== "#" && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-2 rounded-xl
                        bg-gradient-to-r
                        from-purple-500
                        to-pink-500
                        text-black
                        font-semibold
                      "
                    >
                      Live Demo
                    </a>
                  )}

                  {selected.powerBI && (
                    <a
                      href={selected.powerBI}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-2 rounded-xl
                        bg-yellow-400
                        text-black
                        font-semibold
                      "
                    >
                      Power BI
                    </a>
                  )}

                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-2 rounded-xl
                        bg-pink-500
                        text-black
                        font-semibold
                      "
                    >
                      Design
                    </a>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="
                      ml-auto
                      px-5 py-2 rounded-xl
                      border border-red-500/30
                      bg-red-500/10
                      text-red-300
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FULLSCREEN ================= */}
      <AnimatePresence>
        {fullscreenImg && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImg(null)}
          >
            <motion.img
              src={fullscreenImg}
              className="max-w-[90%] max-h-[90%] object-contain rounded-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />

            <button
              className="
                absolute top-6 right-6
                w-12 h-12 rounded-full
                bg-black/50 border border-white/10
                text-white text-xl
              "
              onClick={() => setFullscreenImg(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}