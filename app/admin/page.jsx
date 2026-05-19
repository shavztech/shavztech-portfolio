"use client";

import React, { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import StatCard from "@/components/admin/StatCard";
import EnquiriesPanel from "@/components/admin/EnquiriesPanel";
import EnquiryBreakdown from "@/components/admin/EnquiryBreakdown";
import QuickActions from "@/components/admin/QuickActions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlusCircle, 
  Layers, 
  TrendingUp, 
  Users, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  ChevronRight, 
  Settings, 
  Activity, 
  RefreshCw, 
  LineChart,
  Eye,
  Edit2,
  Trash2,
  ExternalLink,
  Star,
  Search,
  CheckCircle2,
  XCircle,
  FileText,
  MessageSquare,
  Smile
} from "lucide-react";

// Mock Data
const statsData = [
  { id: "enquiries", title: "New Enquiries", value: "5", description: "unread", color: "purple" },
  { id: "blogs", title: "Blog Posts", value: "4", description: "2 published - 2 draft", color: "cyan" },
  { id: "projects", title: "Projects", value: "5", description: "in portfolio", color: "orange" },
  { id: "roles", title: "Open Roles", value: "3", description: "hiring now", color: "pink" }
];

const blogsData = [
  { id: 1, title: "Building Breathtaking 3D Websites in React", status: "Published", views: "1,248", date: "May 18, 2026", color: "cyan" },
  { id: 2, title: "Mastering Tailwind CSS v4 Custom Design Systems", status: "Published", views: "3,104", date: "May 12, 2026", color: "cyan" },
  { id: 3, title: "Designing SaaS CMS Dashboards that WOW Clients", status: "Draft", views: "0", date: "May 10, 2026", color: "purple" },
  { id: 4, title: "GSAP vs Framer Motion: Animation Battle 2026", status: "Draft", views: "0", date: "May 02, 2026", color: "purple" }
];

const projectsData = [
  { id: 1, name: "Autoglide Cinematic Page", tech: ["Next.js", "GSAP", "Tailwind v4"], status: "Completed", url: "#", glow: "purple" },
  { id: 2, name: "Luxury Restaurant Portal", tech: ["Three.js", "React", "CSS3"], status: "Live", url: "#", glow: "cyan" },
  { id: 3, name: "Shavztech Portfolio Studio", tech: ["React", "Framer Motion", "Tailwind"], status: "Completed", url: "#", glow: "orange" },
  { id: 4, name: "AI Analytics SaaS Hub", tech: ["Next.js", "Python", "Chart.js"], status: "In Progress", url: "#", glow: "pink" }
];

const testimonialsData = [
  { id: 1, client: "Basim Rasha", role: "Product Owner", company: "SHAVZTECH", quote: "The dashboard design feels incredibly responsive, fluid, and absolutely premium. The neon glowing design is gorgeous!", rating: 5 },
  { id: 2, client: "Sophia Jenkins", role: "Marketing Lead", company: "Solutions LLP", quote: "Exceeded all our branding goals. Clean spacing, brilliant glassmorphic effects, and incredibly intuitive controls.", rating: 5 },
  { id: 3, client: "Liam Vance", role: "Creative Director", company: "Velo Agency", quote: "Outstanding micro-animations! Navigating this CMS dashboard is pure joy. It makes content management feel like an experience.", rating: 5 }
];

const enquiriesExtendedData = [
  { id: 1, name: "Rahul Menon", subject: "Web Development Portfolio", time: "2 min ago", type: "Client", email: "rahul@menon.dev", message: "Hey there! Looking to design a premium futuristic portfolio for our software group. Can you guys help?", color: "purple" },
  { id: 2, name: "Aisha K.", subject: "Full Stack Development Course", time: "20 min ago", type: "Student", email: "aisha.k@gmail.com", message: "Hi, I am interested in enrolling in the advanced Next.js MERN developer training. Do you offer remote mentorship?", color: "cyan" },
  { id: 3, name: "Vishnu Das", subject: "Senior React Developer Role", time: "1 hr ago", type: "Candidate", email: "vishnu@das.io", message: "Attaching my resume for the Senior React Developer role open at your company. Excited about your creative engineering approach.", color: "orange" },
  { id: 4, name: "TechBridge Co.", subject: "Brand Digital Marketing", time: "3 hrs ago", type: "Client", email: "contact@techbridge.co", message: "We want to hire SHAVZTECH for our SEO and digital marketing campaigns. Let's jump on a quick call this week.", color: "purple" },
  { id: 5, name: "Michael Vance", subject: "UI Design Support", time: "1 day ago", type: "Client", email: "michael@vance.io", message: "We need custom Figma designs transformed to responsive Tailwind components. What are your general hourly rates?", color: "purple" }
];

const hiringData = [
  { id: 1, role: "Senior Frontend Engineer", dept: "Engineering", type: "Full-Time", status: "Active", applicants: 24, budget: "$110k-$130k", color: "cyan" },
  { id: 2, role: "Lead UI/UX Designer", dept: "Design", type: "Contract", status: "Active", applicants: 42, budget: "$90/hr", color: "pink" },
  { id: 3, role: "Backend Developer (Node.js)", dept: "Engineering", type: "Full-Time", status: "Draft", applicants: 0, budget: "$100k-$120k", color: "purple" }
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dynamic Content Renderers
  const renderDashboardView = () => (
    <>
      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {statsData.map((stat, idx) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            color={stat.color}
            index={idx}
          />
        ))}
      </div>

      {/* Second Dashboard Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* Left: Recent enquiries panel (1 col on lg) */}
        <div className="flex">
          <EnquiriesPanel />
        </div>

        {/* Right: Enquiry breakdown & Quick actions (1 col on lg) */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border border-slate-900/60 p-8 md:p-10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-slate-800 transition-all duration-300 space-y-8 flex flex-col justify-between relative overflow-hidden group"
        >
          {/* Subtle top right accent glow */}
          <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl bg-purple-500/5 opacity-20 pointer-events-none group-hover:opacity-40 transition-all duration-500" />
          
          {/* Enquiry breakdown progress bars */}
          <div className="flex-1">
            <EnquiryBreakdown />
          </div>

          {/* Separator line */}
          <div className="h-px bg-slate-900/50 my-6" />

          {/* Quick actions buttons */}
          <div>
            <QuickActions />
          </div>
        </motion.div>
      </div>

      {/* Activity Logs & System Health */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl bg-[#060919]/40 border border-slate-900/40 p-8 md:p-10 backdrop-blur-md shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8"
      >
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">System Operations Console</h4>
            <p className="text-xs text-slate-500 mt-0.5">CMS Engine v1.0.4 is operating normally. Core APIs healthy.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span className="text-slate-400">API Status</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span className="text-slate-400">Database</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            <span className="text-slate-400">Edge CDN</span>
          </div>
        </div>
      </motion.div>
    </>
  );

  const renderBlogView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white tracking-tight">Manage Articles</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-xs font-semibold text-white shadow-lg shadow-purple-600/15 cursor-pointer transition-all duration-300">
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Write Post</span>
        </button>
      </div>

      <div className="rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border border-slate-900/60 p-6 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] space-y-4">
        {blogsData.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-950/40 hover:bg-slate-900/60 border border-slate-900/40 hover:border-slate-800 transition-all duration-300 gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 flex items-center justify-center`}>
                <FileText className={`w-5 h-5 ${blog.status === "Published" ? "text-cyan-400" : "text-purple-400"}`} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{blog.title}</h4>
                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.views} views</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border font-mono ${
                blog.status === "Published" 
                  ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                  : "bg-purple-500/10 text-purple-400 border-purple-500/20"
              }`}>
                {blog.status}
              </span>
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 rounded-lg bg-slate-900 hover:bg-red-950/20 border border-slate-800 hover:border-red-900/40 text-slate-500 hover:text-red-400 transition-all cursor-pointer">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderProjectsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white tracking-tight">Active Portfolio</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-xs font-semibold text-white shadow-lg shadow-cyan-600/15 cursor-pointer transition-all duration-300">
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className={`group relative rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border border-slate-900/60 hover:border-cyan-500/30 p-5 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] transition-all duration-300 backdrop-blur-xl`}
          >
            {/* Dynamic accent glow based on type */}
            <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl bg-cyan-500/5 group-hover:bg-cyan-500/15 transition-all duration-500`} />

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border font-mono ${
                  project.status === "Live" || project.status === "Completed"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                }`}>
                  {project.status}
                </span>
                <span className="text-[10px] font-bold text-slate-500 font-mono">ID: PROJ-0{project.id}</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{project.name}</h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-[9px] font-medium font-mono px-2 py-0.5 bg-slate-950/40 border border-slate-900 text-slate-400 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-900/50 pt-4 mt-5 relative z-10">
              <span className="text-[10px] text-slate-500 font-mono">Last modified May 2026</span>
              <div className="flex items-center gap-1.5">
                <button className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer">
                  <Edit2 className="w-3 h-3" />
                </button>
                <button className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer">
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderTestimonialsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white tracking-tight">Client Testimonials</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-xs font-semibold text-white shadow-lg shadow-amber-600/15 cursor-pointer transition-all duration-300">
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonialsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border border-slate-900/60 hover:border-amber-500/30 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)] transition-all duration-300 backdrop-blur-xl group relative"
          >
            {/* Stars glowing overlay */}
            <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full blur-3xl bg-amber-500/5 opacity-20 pointer-events-none group-hover:opacity-40 transition-all duration-500" />
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-0.5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500 filter drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-900/50 pt-4 mt-5 relative z-10">
              <div>
                <h4 className="text-xs font-bold text-white">{item.client}</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">{item.role}, <span className="font-mono">{item.company}</span></p>
              </div>
              <button className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer">
                <Edit2 className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderEnquiriesView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white tracking-tight">Expanded Inbox</h3>
        {/* Simple inline search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search leads..."
            className="w-48 bg-slate-950/40 border border-slate-900 rounded-xl py-1 px-8 text-xs text-slate-300 focus:outline-none focus:border-purple-500/50 transition-all"
          />
          <Search className="w-3.5 h-3.5 text-slate-600 absolute left-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border border-slate-900/60 p-5 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] space-y-4">
        {enquiriesExtendedData.map((enquiry, idx) => (
          <motion.div
            key={enquiry.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.06 }}
            className="group p-4 rounded-xl bg-slate-950/40 hover:bg-slate-900/60 border border-slate-900/40 hover:border-slate-800 transition-all duration-300 space-y-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  enquiry.color === "purple" ? "bg-purple-500 shadow-purple-500/50" :
                  enquiry.color === "cyan" ? "bg-cyan-500 shadow-cyan-500/50" : "bg-amber-500 shadow-amber-500/50"
                } shadow-[0_0_6px]`} />
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{enquiry.name}</h4>
                <span className="text-[10px] text-slate-500 font-mono">({enquiry.email})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 font-mono">{enquiry.time}</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border font-mono ${
                  enquiry.color === "purple" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                  enquiry.color === "cyan" ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                }`}>{enquiry.type}</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-400">{enquiry.subject}</div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">{enquiry.message}</p>
            </div>
            <div className="flex justify-end pt-1.5 border-t border-slate-900/30">
              <button className="text-[10px] font-semibold px-3 py-1 rounded-lg bg-slate-900 hover:bg-purple-600 hover:text-white border border-slate-800 hover:border-purple-500 text-slate-400 transition-all cursor-pointer">
                Reply Lead
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderHiringView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white tracking-tight">Open Opportunities</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-xs font-semibold text-white shadow-lg shadow-pink-600/15 cursor-pointer transition-all duration-300">
          <PlusCircle className="w-3.5 h-3.5" />
          <span>New Job</span>
        </button>
      </div>

      <div className="rounded-2xl bg-gradient-to-b from-[#0a0d24]/60 to-[#040612]/80 border border-slate-900/60 p-6 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] space-y-4">
        {hiringData.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-950/40 hover:bg-slate-900/60 border border-slate-900/40 hover:border-slate-800 transition-all duration-300 gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 flex items-center justify-center`}>
                <Briefcase className={`w-5 h-5 ${job.status === "Active" ? "text-pink-400" : "text-slate-500"}`} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{job.role}</h4>
                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                  <span>{job.dept}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.budget}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-5">
              <div className="text-right">
                <div className="text-xs font-semibold text-slate-300">{job.applicants} Applicants</div>
                <div className="text-[9px] text-slate-500 font-mono">Submitted this week</div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border font-mono ${
                job.status === "Active" 
                  ? "bg-pink-500/10 text-pink-400 border-pink-500/20" 
                  : "bg-slate-500/10 text-slate-400 border-slate-500/20"
              }`}>
                {job.status}
              </span>
              <button className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer">
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderGreetingsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white tracking-tight">Portal Greetings Customizer</h3>
      </div>

      <div className="rounded-2xl bg-[#060919]/60 border border-slate-900/60 p-6 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/20 border border-slate-900/40 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">Interactive Welcome Message</h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
              <div className="text-sm font-semibold text-slate-200">
                "Welcome back, Rasha 👋"
              </div>
              <button className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-all">
                Edit Greeting
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/20 border border-slate-900/40 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">Dynamic Holiday Banner</h4>
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-300">Display automatic local greetings based on visitor timezones.</span>
                <p className="text-[10px] text-slate-500 font-mono mt-1">Currently displaying default standard operational welcome banner.</p>
              </div>
              <span className="w-9 h-5 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-end p-0.5 cursor-pointer">
                <span className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboardView();
      case "blog":
        return renderBlogView();
      case "projects":
        return renderProjectsView();
      case "testimonials":
        return renderTestimonialsView();
      case "enquiries":
        return renderEnquiriesView();
      case "hiring":
        return renderHiringView();
      case "greetings":
        return renderGreetingsView();
      default:
        return renderDashboardView();
    }
  };

  return (
    <div className="min-h-screen bg-[#03050c] text-white flex overflow-hidden font-sans relative antialiased selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background abstract neon glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[160px] bg-purple-900/10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[160px] bg-indigo-900/10 pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[35%] h-[35%] rounded-full blur-[140px] bg-cyan-900/5 pointer-events-none" />

      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto h-screen relative z-10 custom-scrollbar">
        {/* Topbar */}
        <Topbar 
          onMenuOpen={() => setSidebarOpen(true)} 
          activeTab={activeTab} 
        />

        {/* Inner Dashboard Body */}
        <main className="flex-1 p-8 md:p-12 space-y-12 md:space-y-16 max-w-[1500px] w-full mx-auto">
          {/* Main Title Block */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Welcome back, Rasha</span>
                  <span className="inline-block animate-bounce">👋</span>
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Here is what is happening at SHAVZTECH today.
                </p>
              </div>

              {/* Quick info / Sync Indicator */}
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono bg-slate-950/40 border border-slate-900 rounded-xl px-3 py-1.5 w-fit">
                <RefreshCw className="w-3 h-3 text-purple-500 animate-spin" />
                <span>Live synced • 1s ago</span>
              </div>
            </motion.div>

            {/* Dynamic View rendering with simple transition animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-12 md:space-y-16"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
