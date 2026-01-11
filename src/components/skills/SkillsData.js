import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiVite,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiPhp,
  SiAnydesk,
} from "react-icons/si";

// Safe icons for MS Office tools
import { RiFileWordLine, RiFileExcel2Line, RiFilePpt2Line } from "react-icons/ri";
// Generic icon for ManageEngine
import { RiToolsLine } from "react-icons/ri";

export const skills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Figma", icon: FaFigma },
  // New skills added safely
  { name: "MS Word", icon: RiFileWordLine },
  { name: "MS Excel", icon: RiFileExcel2Line },
  { name: "PowerPoint", icon: RiFilePpt2Line },
  { name: "AnyDesk", icon: SiAnydesk },
  { name: "ManageEngine", icon: RiToolsLine },
];
