import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SpotlightSection({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
}
