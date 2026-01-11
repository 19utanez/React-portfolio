import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import { skills } from "./SkillsData";
import { useScrollDirection } from "../../hooks/useScrollDirection"; // adjust path

export default function SkillsGrid() {
  const scrollDir = useScrollDirection(); // "up" or "down"

  // Variants depending on scroll direction
  const variantsDown = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const variantsUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="skills-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // triggers every time we scroll in view
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={scrollDir === "down" ? variantsDown : variantsUp}
        >
          <SkillIcon icon={skill.icon} name={skill.name} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}
