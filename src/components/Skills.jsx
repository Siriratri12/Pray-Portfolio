// import { motion } from "framer-motion";

// import {
//   SiReact,
//   SiNextdotjs,
//   SiVuedotjs,
//   SiVuetify,
//   SiHtml5,
//   SiJavascript,
//   SiChartdotjs,
//   SiLeaflet,
//   SiNodedotjs,
//   SiMysql,
//   SiDocker,
//   SiPostman,
//   SiFigma,
//   SiCanva,
// } from "react-icons/si";

// import {
//   FaJava,
//   FaCss3Alt,
//   FaChartBar,
//   FaMicrosoft,
//   FaPenNib,
// } from "react-icons/fa";

// import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React", icon: <SiReact /> },
//       { name: "Next.js", icon: <SiNextdotjs /> },
//       { name: "Vue.js", icon: <SiVuedotjs /> },
//       { name: "Vuetify", icon: <SiVuetify /> },
//       { name: "HTML", icon: <SiHtml5 /> },
//       { name: "CSS", icon: <FaCss3Alt /> },
//       { name: "JavaScript", icon: <SiJavascript /> },
//     ],
//   },

//   {
//     title: "Data Visualization",
//     skills: [
//       { name: "ECharts", icon: "EC" },
//       { name: "Chart.js", icon: <SiChartdotjs /> },
//       { name: "Leaflet", icon: <SiLeaflet /> },
//       { name: "Power BI", icon: <FaChartBar /> },
//     ],
//   },

//   {
//     title: "Backend & Data",
//     skills: [
//       { name: "Node.js", icon: <SiNodedotjs /> },
//       { name: "SQL", icon: <SiMysql /> },
//       { name: "C#", icon: <TbBrandCSharp /> },
//       { name: "Java", icon: <FaJava /> },
//       { name: "C", icon: "C" },
//     ],
//   },

//   {
//     title: "Tools",
//     skills: [
//       { name: "Docker", icon: <SiDocker /> },
//       { name: "Postman", icon: <SiPostman /> },
//       { name: "Sourcetree", icon: "ST" },
//       { name: "K2 Designer", icon: "K2" },
//       { name: "VS Code", icon: <TbBrandVscode /> },
//     ],
//   },

//   {
//     title: "UI / UX",
//     skills: [
//       { name: "Figma", icon: <SiFigma /> },
//       { name: "Illustrator", icon: <FaPenNib /> },
//       { name: "Canva", icon: <SiCanva /> },
//     ],
//   },

//   {
//     title: "Others",
//     skills: [
//       { name: "Office", icon: <FaMicrosoft /> },
//       { name: "CapCut", icon: "CC" },
//       { name: "Clipchamp", icon: "CP" },
//       { name: "draw.io", icon: "DI" },
//       { name: "Testing", icon: "TC" },
//     ],
//   },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-black py-16 text-white"
//     >
//       {/* BG */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />

//       {/* GRID */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         {/* TITLE */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="
//             text-center
//             text-2xl
//             md:text-4xl
//             font-black
//             mb-10
//             bg-gradient-to-r
//             from-cyan-300
//             via-purple-400
//             to-pink-500
//             bg-clip-text
//             text-transparent
//           "
//         >
//           Skills
//         </motion.h2>

//         {/* TWO SIDES */}
//         <div className="grid md:grid-cols-2 gap-5">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.45,
//                 delay: categoryIndex * 0.05,
//               }}
//               whileHover={{
//                 y: -4,
//               }}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-white/10
//                 bg-white/[0.04]
//                 backdrop-blur-xl
//                 p-4
//                 shadow-[0_10px_40px_rgba(0,0,0,0.35)]
//               "
//             >
//               {/* GLOW */}
//               <div
//                 className="
//                   absolute
//                   inset-0
//                   opacity-0
//                   group-hover:opacity-100
//                   transition
//                   duration-500
//                   bg-gradient-to-br
//                   from-cyan-500/10
//                   via-purple-500/10
//                   to-pink-500/10
//                 "
//               />

//               {/* INNER BORDER */}
//               <div className="absolute inset-[1px] rounded-[22px] border border-white/5" />

//               {/* HEADER */}
//               <div className="relative z-10 flex items-center gap-3 mb-4">
//                 <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

//                 <h3
//                   className="
//                     text-sm
//                     md:text-base
//                     font-bold
//                     bg-gradient-to-r
//                     from-cyan-300
//                     via-purple-300
//                     to-pink-400
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   {category.title}
//                 </h3>
//               </div>

//               {/* SKILLS */}
//               <div className="relative z-10 flex flex-wrap gap-2">
//                 {category.skills.map((skill, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{
//                       y: -2,
//                       scale: 1.03,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 300,
//                       damping: 16,
//                     }}
//                     className="
//                       relative
//                       flex
//                       items-center
//                       gap-2
//                       rounded-xl
//                       border
//                       border-white/10
//                       bg-black/40
//                       px-3
//                       py-2
//                       backdrop-blur-md
//                       overflow-hidden
//                     "
//                   >
//                     {/* CHIP LIGHT */}
//                     <div
//                       className="
//                         absolute
//                         inset-0
//                         opacity-0
//                         hover:opacity-100
//                         transition
//                         duration-300
//                         bg-gradient-to-r
//                         from-cyan-500/10
//                         via-purple-500/10
//                         to-pink-500/10
//                       "
//                     />

//                     {/* ICON */}
//                     <div
//                       className="
//                         relative
//                         z-10
//                         text-sm
//                         text-white
//                         drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]
//                       "
//                     >
//                       {skill.icon}
//                     </div>

//                     {/* NAME */}
//                     <span
//                       className="
//                         relative
//                         z-10
//                         text-[10px]
//                         md:text-xs
//                         font-medium
//                         text-gray-200
//                         whitespace-nowrap
//                       "
//                     >
//                       {skill.name}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* BOTTOM LIGHT */}
//               <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-white/[0.04] to-transparent" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* glow 1 */}
        <div className="absolute top-[-180px] left-[-120px] w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-3xl" />

        {/* glow 2 */}
        <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-3xl" />

        {/* mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent_35%)]" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs mb-3">
            Technical Expertise
          </p>

          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-6
                shadow-[0_0_50px_rgba(168,85,247,0.08)]
              "
            >
              {/* HOVER GLOW */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  ${category.glow}
                `}
              />

              {/* TOP LIGHT */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              {/* HEADER */}
              <div className="relative z-10 flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              {/* SKILLS */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -2,
                        scale: 1.04,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 16,
                      }}
                      className="
                        relative
                        flex
                        items-center
                        gap-2
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/40
                        px-4
                        py-3
                        backdrop-blur-md
                        overflow-hidden
                      "
                    >
                      {/* chip glow */}
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

                      {/* ICON */}
                      <div className="relative z-10 text-lg text-white">
                        {Icon ? (
                          <Icon />
                        ) : (
                          <span className="text-[10px] font-bold">
                            {skill.text}
                          </span>
                        )}
                      </div>

                      {/* NAME */}
                      <span className="relative z-10 text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM LIGHT */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/[0.03] to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
