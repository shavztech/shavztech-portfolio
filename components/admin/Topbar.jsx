"use client";

import React from "react";
import { Menu, Search, Bell, ExternalLink, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";

export default function Topbar({ onMenuOpen, activeTab }) {
  // Translate activeTab id to user-friendly title
  const getTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard";
      case "blog":
        return "Blog Posts";
      case "projects":
        return "Projects Portfolio";
      case "testimonials":
        return "Client Testimonials";
      case "enquiries":
        return "Leads & Enquiries";
      case "hiring":
        return "Hiring / Open Roles";
      case "greetings":
        return "Greetings & Messages";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="sticky top-0 z-20 w-full bg-[#050816]/75 backdrop-blur-xl border-b border-slate-900/50 px-8 py-5 md:px-12 md:py-6 flex items-center justify-between">
      {/* Left side: Title and Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuOpen}
          className="md:hidden p-2 rounded-lg bg-slate-950/50 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {getTitle()}
          </h1>
          <p className="text-xs text-slate-500 font-mono hidden md:block">
            SHAVZTECH Solutions LLP
          </p>
        </div>
      </div>

      {/* Right side: Search, Actions, Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search console..."
            className="w-48 lg:w-64 bg-slate-950/40 border border-slate-900 hover:border-slate-800 focus:border-purple-500/50 rounded-xl py-1.5 pl-9 pr-4 text-xs text-slate-300 placeholder-slate-600 focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
          />
          <Search className="w-3.5 h-3.5 text-slate-600 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* View Site Button */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-300 transition-all duration-300"
        >
          <span>View site</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
        </a>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl bg-slate-950/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all duration-300">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_6px_rgba(236,72,153,0.7)]" />
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-900" />

        {/* User Profile dropdown */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 p-[1px] shadow-lg shadow-purple-500/10">
            <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center font-bold text-xs text-white">
              R
            </div>
          </div>
          <div className="hidden lg:block text-left">
            <div className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
              Rasha Basim
            </div>
            <div className="text-[9px] text-slate-500 font-mono">Owner</div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-all duration-300 hidden lg:block" />
        </div>
      </div>
    </header>
  );
}
