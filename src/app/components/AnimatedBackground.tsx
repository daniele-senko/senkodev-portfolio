"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Particle {
  id: number;
  width: string;
  height: string;
  left: string;
  top: string;
  duration: number;
}

const createParticles = (): Particle[] =>
  Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    width: Math.random() * 8 + 4 + "px",
    height: Math.random() * 8 + 4 + "px",
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    duration: Math.random() * 10 + 10,
  }));

const AnimatedBackground = () => {
  const [particles] = useState<Particle[]>(createParticles);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-inazuma-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-inazuma-purple)_0%,transparent_70%)] opacity-30" />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-inazuma-sakura/20 blur-sm"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
