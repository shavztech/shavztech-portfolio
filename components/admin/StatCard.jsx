"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ title, value, description, color, index }) {
  const colorMap = {
    purple: {
      border: "border-purple-500/10",
      borderHover: "hover:border-purple-500/40",
      topBorder: "bg-purple-500",
      shadow: "hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.35)]",
      glow: "group-hover:text-purple-400",
      bgGradient: "from-purple-950/20 to-transparent",
      accentGlow: "bg-purple-500/20",
      textGlow: "text-purple-400/90"
    },
    cyan: {
      border: "border-cyan-500/10",
      borderHover: "hover:border-cyan-500/40",
      topBorder: "bg-cyan-500",
      shadow: "hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.35)]",
      glow: "group-hover:text-cyan-400",
      bgGradient: "from-cyan-950/20 to-transparent",
      accentGlow: "bg-cyan-500/20",
      textGlow: "text-cyan-400"
    },
    orange: {
      border: "border-amber-500/10",
      borderHover: "hover:border-amber-500/40",
      topBorder: "bg-amber-500",
      shadow: "hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.35)]",
      glow: "group-hover:text-amber-400",
      bgGradient: "from-amber-950/20 to-transparent",
      accentGlow: "bg-amber-500/20",
      textGlow: "text-amber-400/90"
    },
    pink: {
      border: "border-pink-500/10",
      borderHover: "hover:border-pink-500/40",
      topBorder: "bg-pink-500",
      shadow: "hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.35)]",
      glow: "group-hover:text-pink-400",
      bgGradient: "from-pink-950/20 to-transparent",
      accentGlow: "bg-pink-500/20",
      textGlow: "text-pink-400/90"
    }
  };

  const currentColors = colorMap[color] || colorMap.purple;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border ${currentColors.border} ${currentColors.borderHover} p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 backdrop-blur-xl ${currentColors.shadow} min-h-[210px] md:min-h-[230px]`}
    >
      {/* Dynamic top accent border */}
      <div className={`absolute top-0 left-0 right-0 h-[2.5px] ${currentColors.topBorder} w-full opacity-80`} />

      {/* Internal subtle glow reflection */}
      <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl ${currentColors.accentGlow} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

      <div className="relative z-10">
        <span className={`text-[10px] font-bold tracking-widest font-mono ${currentColors.textGlow} group-hover:text-white transition-colors duration-300 uppercase`}>
          {title}
        </span>
      </div>

      {/* Card Body (Big Value & Description) */}
      <div className="relative z-10 mt-8 flex flex-col">
        <span className="text-5xl font-extrabold text-white tracking-tight">
          {value}
        </span>
        <span className="text-xs text-slate-300 mt-2 font-medium tracking-wide">
          {description}
        </span>
      </div>
    </motion.div>
  );
}
