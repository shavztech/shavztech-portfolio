"use client";

import React from "react";
import { motion } from "framer-motion";

const breakdownData = [
  { label: "Clients", value: 55, color: "bg-purple-500 shadow-purple-500/20", text: "text-purple-400" },
  { label: "Students", value: 30, color: "bg-cyan-500 shadow-cyan-500/20", text: "text-cyan-400" },
  { label: "Candidates", value: 15, color: "bg-amber-500 shadow-amber-500/20", text: "text-amber-400" }
];

export default function EnquiryBreakdown() {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-lg font-bold text-white tracking-tight">
          Enquiry breakdown
        </h2>
      </div>

      <div className="space-y-6">
        {breakdownData.map((item, index) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-350">{item.label}</span>
              <span className={item.text}>{item.value}%</span>
            </div>

            {/* Progress bar tracks */}
            <div className="w-full h-2 rounded-full bg-slate-950/60 overflow-hidden border border-slate-900/30">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.3 }}
                className={`h-full rounded-full ${item.color} shadow-[0_0_8px]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
