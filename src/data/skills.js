import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiVuetify,
  SiHtml5,
  SiJavascript,
  SiChartdotjs,
  SiLeaflet,
  SiNodedotjs,
  SiMysql,
  SiDocker,
  SiPostman,
  SiFigma,
  SiCanva,
} from "react-icons/si";

import {
  FaJava,
  FaCss3Alt,
  FaChartBar,
  FaMicrosoft,
  FaPenNib,
} from "react-icons/fa";

import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";

export const skillCategories = [
  {
    title: "Frontend",
    glow: "from-cyan-500/10 via-blue-500/10 to-purple-500/10",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Vuetify", icon: SiVuetify },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },

  {
    title: "Data Visualization",
    glow: "from-purple-500/10 via-pink-500/10 to-cyan-500/10",
    skills: [
      { name: "ECharts", text: "EC" },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Leaflet", icon: SiLeaflet },
      { name: "Power BI", icon: FaChartBar },
    ],
  },

  {
    title: "Backend & Data",
    glow: "from-green-500/10 via-cyan-500/10 to-blue-500/10",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "SQL", icon: SiMysql },
      { name: "C#", icon: TbBrandCSharp },
      { name: "Java", icon: FaJava },
      { name: "C", text: "C" },
    ],
  },

  {
    title: "Tools",
    glow: "from-orange-500/10 via-pink-500/10 to-purple-500/10",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Sourcetree", text: "ST" },
      { name: "K2 Designer", text: "K2" },
      { name: "VS Code", icon: TbBrandVscode },
    ],
  },

  {
    title: "UI / UX",
    glow: "from-pink-500/10 via-purple-500/10 to-cyan-500/10",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Illustrator", icon: FaPenNib },
      { name: "Canva", icon: SiCanva },
    ],
  },

  {
    title: "Others",
    glow: "from-yellow-500/10 via-orange-500/10 to-red-500/10",
    skills: [
      { name: "Office", icon: FaMicrosoft },
      { name: "CapCut", text: "CC" },
      { name: "Clipchamp", text: "CP" },
      { name: "draw.io", text: "DI" },
      { name: "Testing", text: "TC" },
    ],
  },
];