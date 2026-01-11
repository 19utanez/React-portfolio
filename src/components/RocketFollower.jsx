import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function RocketFollower() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  // Smooth delayed movement
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  // Smooth slow rotation
  const springRotate = useSpring(rotate, { stiffness: 20, damping: 15 });

  const prev = useRef({ x: 0, y: 0 });

  // Distance from cursor
  const offsetX = -60; // negative = left, positive = right
  const offsetY = -40; // negative = above, positive = below

  useEffect(() => {
    const handleMouseMove = (e) => {
      const targetX = e.clientX + offsetX - 25; // center rocket
      const targetY = e.clientY + offsetY - 25;

      x.set(targetX);
      y.set(targetY);

      // Calculate angle based on movement direction
      const deltaX = targetX - prev.current.x;
      const deltaY = targetY - prev.current.y;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      rotate.set(angle);

      prev.current = { x: targetX, y: targetY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, rotate]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "50px",
        height: "50px",
        zIndex: 9999,
        x: springX,
        y: springY,
        rotate: springRotate,
        pointerEvents: "none",
      }}
    >
      <motion.img
        src="/rocket.png"
        alt="Rocket"
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}
