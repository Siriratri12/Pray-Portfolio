import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  // ✅ filter state
  const [filter, setFilter] = useState("All");

  // ESC + lock scroll
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

  // ✅ filter logic
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Projects
      </h2>

      {/* ================= FILTER ================= */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {["⭐ All", "🌐 Web", "💻 System", "📊 Dashboard", "🎨 Design"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 text-sm rounded-full border transition
              ${
                filter === item
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-black border-transparent"
                  : "border-gray-700 text-gray-400 hover:border-purple-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* ================= GRID ================= */}
      <motion.div
        layout
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="group relative cursor-pointer rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition"
              onClick={() => openModal(p)}
            >
              <img
                src={p.images?.[0]}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                alt={p.title}
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded w-fit mb-2">
                  {p.type}
                </span>

                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-xs text-gray-300">{p.tech}</p>

                <button className="mt-3 text-sm bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded w-fit">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-gray-900 w-[95%] max-w-4xl rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={selected.images?.[imgIndex]}
                  className="w-full h-80 object-cover cursor-zoom-in"
                  alt="project"
                  onClick={() => setFullscreenImg(selected.images[imgIndex])}
                />

                {/* arrows */}
                {selected.images?.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setImgIndex(
                          imgIndex === 0
                            ? selected.images.length - 1
                            : imgIndex - 1,
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-1 rounded hover:bg-purple-500"
                    >
                      ◀
                    </button>

                    <button
                      onClick={() =>
                        setImgIndex(
                          imgIndex === selected.images.length - 1
                            ? 0
                            : imgIndex + 1,
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-1 rounded hover:bg-purple-500"
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-2 p-3 overflow-x-auto bg-gray-950">
                {selected.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => {
                      setImgIndex(i);
                      setFullscreenImg(img); // 👈 กดแล้ว fullscreen ได้เลย
                    }}
                    className={`w-20 h-14 object-cover rounded cursor-pointer border ${
                      i === imgIndex
                        ? "border-purple-400"
                        : "border-transparent opacity-60"
                    }`}
                  />
                ))}
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold">{selected.title}</h2>

                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                  {selected.type}
                </span>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {selected.description}
                </p>

                <p className="text-purple-400 text-sm">{selected.tech}</p>

                {/* LINKS */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {selected.github && selected.github !== "#" && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                    >
                      GitHub
                    </a>
                  )}

                  {selected.live && selected.live !== "#" && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-black rounded"
                    >
                      Live Demo
                    </a>
                  )}

                  {selected.powerBI && (
                    <a
                      href={selected.powerBI}
                      target="_blank"
                      className="px-4 py-2 bg-yellow-400 text-black rounded"
                    >
                      Power BI
                    </a>
                  )}

                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      className="px-4 py-2 bg-pink-500 rounded"
                    >
                      Design
                    </a>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="ml-auto px-4 py-2 bg-red-500 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FULLSCREEN IMAGE ================= */}
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
              className="max-w-[95%] max-h-[95%] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />

            <button
              className="absolute top-6 right-6 text-white text-xl bg-black/50 px-3 py-1 rounded"
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
