"use client";

import React from "react";
import { PlusCircle, FilePlus2, BriefcaseConveyorBelt, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function QuickActions() {
  const actions = [
    {
      label: "New post",
      icon: FilePlus2,
      glow: "hover:shadow-purple-500/10 hover:border-purple-500/40",
      textColor: "hover:text-purple-400"
    },
    {
      label: "Add project",
      icon: PlusCircle,
      glow: "hover:shadow-cyan-500/10 hover:border-cyan-500/40",
      textColor: "hover:text-cyan-400"
    },
    {
      label: "Post job",
      icon: Briefcase,
      glow: "hover:shadow-amber-500/10 hover:border-amber-500/40",
      textColor: "hover:text-amber-400"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
          Quick actions
        </h3>
      </div>

      <div className="flex flex-wrap gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.08 + 0.5 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-950/40 border border-slate-900 text-xs font-semibold text-slate-350 cursor-pointer shadow-lg transition-all duration-300 backdrop-blur-md ${action.glow} ${action.textColor}`}
            >
              <Icon className="w-4 h-4 text-slate-500 group-hover:text-current transition-colors" />
              <span>{action.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
