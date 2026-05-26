import { motion } from "framer-motion";
import { Mail, Phone, MessagesSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "siriratri.u@gmail.com",
      href: "mailto:siriratri.u@gmail.com",
      icon: Mail,
      color: "hover:border-purple-400 hover:text-purple-400",
    },
    {
      title: "Phone",
      value: "097-132-8795",
      href: "tel:0971328795",
      icon: Phone,
      color: "hover:border-pink-400 hover:text-pink-400",
    },
    {
      title: "Facebook",
      value: "Siriratri Uttamamunee",
      href: "https://www.facebook.com/",
      icon: MessagesSquare,
      color: "hover:border-blue-400 hover:text-blue-400",
    },
    {
      title: "Line",
      value: "srrt-u",
      href: "https://line.me/ti/p/~srrt-u",
      icon: MessagesSquare,
      color: "hover:border-green-400 hover:text-green-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-pink-600/20 blur-[120px]" />

      {/* ✨ Floating Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            I’m currently looking for opportunities in{" "}
            <span className="text-purple-400 font-semibold">
              Software Development
            </span>
            ,{" "}
            <span className="text-pink-400 font-semibold">Data Analytics</span>,
            and{" "}
            <span className="text-cyan-400 font-semibold">UI/UX Design</span>.
            Feel free to contact me for collaboration or career opportunities.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 ${item.color}`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-black/40 border border-gray-700 group-hover:border-current transition">
                      <Icon size={24} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">{item.title}</p>

                      <p className="font-semibold text-lg break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <a
            href="mailto:siriratri.u@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%] hover:bg-right transition-all duration-500 text-black font-bold shadow-2xl shadow-purple-500/30"
          >
            🚀 Let’s Work Together
            <ArrowUpRight
              size={20}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
