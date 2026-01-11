import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
  const generatedStars = Array.from({ length: 18 }, () => ({ // reduced from 40 to 18
    left: Math.random() * 100 + "vw",
    top: Math.random() * 60 + "vh",
    scale: 0.8 + Math.random() * 0.8,
    delay: Math.random() * 12,
    duration: 6 + Math.random() * 5,
    repeatDelay: 8 + Math.random() * 12,
    travelX: 30 + Math.random() * 30,
    travelY: 15 + Math.random() * 30,
  }));

  setStars(generatedStars);
}, []);


  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: star.scale,
          }}
          animate={{
            x: `${star.travelX}vw`,
            y: `${star.travelY}vh`,
            opacity: [0, 1, 0], // fade in, then fade out before reaching edge
          }}
          transition={{
            delay: star.delay,
            duration: star.duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: star.repeatDelay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,

            width: "3px",                         // thicker core
            height: "110px",                      // longer tail

            background:
              "linear-gradient(-45deg, rgba(255,255,255,1), rgba(255,255,255,0))",

            rotate: "-45deg",

            filter: `
              drop-shadow(0 0 6px rgba(255,255,255,0.9))
              drop-shadow(0 0 14px rgba(255,255,255,0.8))
              drop-shadow(0 0 28px rgba(255,255,255,0.6))
            `,
          }}
        />
      ))}
    </div>
  );
}
