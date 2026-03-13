"use client";

import { motion } from "framer-motion";

export default function HeroAnimatedBackdrop() {
  return (
    <div className="hero-motion-bg" aria-hidden="true">
      {/* Large warm gold glow — top left */}
      <motion.span
        className="hero-blob hero-blob-one"
        animate={{ scale: [1, 1.18, 0.92, 1], opacity: [0.72, 1, 0.78, 0.72] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Electric blue glow — top right */}
      <motion.span
        className="hero-blob hero-blob-two"
        animate={{ scale: [1, 0.88, 1.14, 1], opacity: [0.6, 0.95, 0.65, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      {/* Teal/green glow — bottom center */}
      <motion.span
        className="hero-blob hero-blob-three"
        animate={{ scale: [1, 1.12, 0.9, 1], opacity: [0.55, 0.88, 0.6, 0.55] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Purple accent glow — bottom right */}
      <motion.span
        className="hero-blob hero-blob-four"
        animate={{ scale: [1, 1.2, 0.85, 1], opacity: [0.5, 0.82, 0.55, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Sweeping horizontal light beam */}
      <motion.div
        className="hero-beam"
        animate={{ opacity: [0, 0.7, 0], x: ["-30%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
      />
      {/* Dot grid overlay */}
      <div className="hero-grid-glow" />
    </div>
  );
}
