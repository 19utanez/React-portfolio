import { motion } from "framer-motion";

export default function SkillIcon({ icon: Icon, name, index }) {
  return (
    <motion.div
      className="skill-icon"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <Icon />
      <span>{name}</span>
    </motion.div>
  );
}
