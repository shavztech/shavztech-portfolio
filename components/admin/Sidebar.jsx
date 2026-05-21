"use client";

import React from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Mail, 
  UserPlus, 
  Smile, 
  X, 
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarSections = [
  {
    title: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    ]
  },
  {
    title: "Content",
    items: [
      { id: "blog", label: "Blog posts", icon: FileText, path: "/admin/blogs" },
      { id: "projects", label: "Projects", icon: Briefcase, path: "/admin/projects" },
      { id: "testimonials", label: "Testimonials", icon: MessageSquare, path: "/admin/testimonials" },
    ]
  },
  {
    title: "Leads",
    items: [
      { id: "enquiries", label: "Enquiries", icon: Mail, path: "/admin/enquiries", badge: "5" },
    ]
  },
  {
    title: "Operations",
    items: [
      { id: "hiring", label: "Hiring", icon: UserPlus, path: "/admin/hiring" },
      { id: "greetings", label: "Greetings", icon: Smile, path: "/admin/greetings" },
    ]
  }
];

export default function Sidebar({ isOpen, onClose, activeTab, setActiveTab }) {
  const sidebarContent = (
    <div className="h-full flex flex-col bg-[#040612] border-r border-slate-900/60 w-[260px] text-slate-300 font-sans backdrop-blur-xl transition-all duration-300 select-none">
      {/* Sidebar Header */}
      <div className="p-7 flex items-center justify-between border-b border-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-[#030611]" />
          </div>
          <div>
            <div className="font-bold tracking-wider text-white text-base flex items-center gap-1.5">
              SHAVZTECH
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-mono">
              Mini CMS • Solutions LLP
            </div>
          </div>
        </div>
        {/* Mobile close button */}
        <button 
          onClick={onClose}
          className="md:hidden p-1.5 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-7 px-5 space-y-8 custom-scrollbar">
        {sidebarSections.map((section, sIdx) => (
          <div key={section.title} className="space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400/90 font-bold px-3">
              {section.title}
            </span>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const isActive = activeTab === item.id;
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id);
                        if (window.innerWidth < 768) {
                          onClose();
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden ${
                        isActive 
                          ? "text-purple-400 bg-slate-900/60 border border-purple-500/30 shadow-[0_0_15px_-3px_rgba(168,85,247,0.15),inset_0_1px_1px_rgba(255,255,255,0.05)] font-semibold" 
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-950/40 border border-transparent hover:border-slate-900/30"
                      }`}
                    >
                      {/* Left border active indicator */}
                      {isActive && (
                        <motion.div 
                          layoutId="active-indicator"
                          className="absolute left-0 top-2.5 bottom-2.5 w-[3.5px] bg-purple-500 rounded-r-md shadow-[0_0_10px_#a855f7]"
                        />
                      )}
                      
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-purple-400" : "text-slate-500 group-hover:text-slate-300"}`} />
                        <span>{item.label}</span>
                      </div>

                      {/* Badge / Indicator */}
                      {item.badge ? (
                        <span className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 text-[10px] font-bold border border-pink-500/20 shadow-[0_0_8px_rgba(236,72,153,0.15)]">
                          {item.badge}
                        </span>
                      ) : isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping shadow-[0_0_6px_#a855f7]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Profile or Settings placeholder */}
      <div className="p-4 border-t border-slate-900/50 bg-slate-950/20 flex items-center gap-3">
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 p-[1px]">
            <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center font-bold text-xs text-white">
              SB
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-white truncate">Basim Rasha</div>
          <div className="text-[10px] text-slate-500 font-mono truncate">Administrator</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden md:block h-screen sticky top-0 z-30 flex-shrink-0 w-[260px] min-w-[260px]">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 bottom-0 left-0 z-50 md:hidden"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
