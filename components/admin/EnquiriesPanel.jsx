"use client";

import React from "react";
import { motion } from "framer-motion";

const initialEnquiries = [
  {
    id: 1,
    name: "Rahul Menon",
    subject: "Web Development",
    time: "2 min ago",
    type: "Client",
    color: "purple"
  },
  {
    id: 2,
    name: "Aisha K.",
    subject: "Full Stack Course",
    time: "20 min ago",
    type: "Student",
    color: "cyan"
  },
  {
    id: 3,
    name: "Vishnu Das",
    subject: "React Developer role",
    time: "1 hr ago",
    type: "Candidate",
    color: "orange"
  },
  {
    id: 4,
    name: "TechBridge Co.",
    subject: "Digital Marketing",
    time: "3 hrs ago",
    type: "Client",
    color: "purple"
  }
];

export default function EnquiriesPanel() {
  const getColorClasses = (color) => {
    switch (color) {
      case "purple":
        return {
          dot: "bg-purple-500 shadow-purple-500/50",
          tag: "bg-purple-500/10 text-purple-400 border-purple-500/20"
        };
      case "cyan":
        return {
          dot: "bg-cyan-500 shadow-cyan-500/50",
          tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
        };
      case "orange":
        return {
          dot: "bg-amber-500 shadow-amber-500/50",
          tag: "bg-amber-500/10 text-amber-400 border-amber-500/20"
        };
      default:
        return {
          dot: "bg-slate-500 shadow-slate-500/50",
          tag: "bg-slate-500/10 text-slate-400 border-slate-500/20"
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 min-w-[320px] rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border border-slate-900/60 p-8 md:p-10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-slate-800 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background glow overlay */}
      <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full blur-3xl bg-indigo-500/5 opacity-20 pointer-events-none group-hover:opacity-40 transition-all duration-500" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-900/50 pb-6 mb-6">
        <h2 className="text-lg font-bold text-white tracking-tight">
          Recent enquiries
        </h2>
        <button className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-slate-200 transition-all duration-300">
          See all
        </button>
      </div>

      {/* List */}
      <div className="space-y-4 md:space-y-5">
        {initialEnquiries.map((enquiry, index) => {
          const classes = getColorClasses(enquiry.color);
          return (
            <motion.div
              key={enquiry.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 + 0.3 }}
              className="group/item flex items-center justify-between p-4 md:p-5 rounded-2xl bg-slate-950/40 hover:bg-slate-900/60 border border-slate-900/40 hover:border-slate-800/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Custom dot with pulsed inner ring */}
                <div className="relative flex-shrink-0 flex items-center justify-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${classes.dot} shadow-[0_0_8px]`} />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-200 truncate group-hover/item:text-white transition-colors">
                    {enquiry.name} <span className="text-slate-600 font-normal"> — {enquiry.subject}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium font-mono mt-1">
                    {enquiry.time} <span className="text-slate-700 mx-1.5">•</span> {enquiry.type}
                  </div>
                </div>
              </div>

              {/* Tag Pill */}
              <div className={`text-[9px] font-bold px-2.5 py-1 rounded-md border font-mono uppercase tracking-wider ${classes.tag}`}>
                {enquiry.type}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
