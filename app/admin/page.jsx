"use client";

import Sidebar from "../../components/admin/Sidebar";

export default function AdminPage() {

  return (

    <div className="min-h-screen bg-[#070B14] text-white flex">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1">

        {/* TOPBAR */}

        <div className="border-b border-white/5 px-8 py-6 flex items-center justify-between">

          <div>

            <h1 className="text-[34px] font-black mb-1">
              Dashboard
            </h1>

            <p className="text-gray-500 text-sm">
              SHAVZTECH Solutions LLP
            </p>

          </div>

          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition-all">

            View site

          </button>

        </div>

        {/* CONTENT */}

        <div className="p-8 space-y-8">

          {/* STATS */}

          <div className="grid grid-cols-4 gap-5">

            {/* CARD */}

            <div className="bg-[#0B1020] border border-purple-500/30 rounded-[24px] p-6">

              <p className="text-gray-500 text-sm uppercase tracking-[2px] mb-4">
                New Enquiries
              </p>

              <h2 className="text-5xl font-black mb-2">
                4
              </h2>

              <p className="text-gray-500 text-sm">
                unread
              </p>

            </div>

            {/* CARD */}

            <div className="bg-[#0B1020] border border-cyan-400/30 rounded-[24px] p-6">

              <p className="text-gray-500 text-sm uppercase tracking-[2px] mb-4">
                Blog Posts
              </p>

              <h2 className="text-5xl font-black mb-2">
                4
              </h2>

              <p className="text-gray-500 text-sm">
                2 published · 2 draft
              </p>

            </div>

            {/* CARD */}

            <div className="bg-[#0B1020] border border-yellow-400/30 rounded-[24px] p-6">

              <p className="text-gray-500 text-sm uppercase tracking-[2px] mb-4">
                Projects
              </p>

              <h2 className="text-5xl font-black mb-2">
                5
              </h2>

              <p className="text-gray-500 text-sm">
                in portfolio
              </p>

            </div>

            {/* CARD */}

            <div className="bg-[#0B1020] border border-pink-500/30 rounded-[24px] p-6">

              <p className="text-gray-500 text-sm uppercase tracking-[2px] mb-4">
                Open Roles
              </p>

              <h2 className="text-5xl font-black mb-2">
                3
              </h2>

              <p className="text-gray-500 text-sm">
                hiring now
              </p>

            </div>

          </div>

          {/* LOWER GRID */}

          <div className="grid grid-cols-[1.2fr_0.8fr] gap-5">

            {/* RECENT ENQUIRIES */}

            <div className="bg-[#0B1020] border border-white/5 rounded-[28px] p-6">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-2xl font-bold">
                  Recent enquiries
                </h2>

                <button className="bg-white/5 border border-white/10 px-5 py-2 rounded-xl text-sm">

                  See all

                </button>

              </div>

              <div className="space-y-6">

                <div className="border-b border-white/5 pb-5">

                  <div className="flex items-center gap-3 mb-2">

                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>

                    <p className="text-lg text-gray-300">
                      Rahul Menon — Web Development
                    </p>

                  </div>

                  <p className="text-gray-500 ml-6 text-sm">
                    2 min ago · Client
                  </p>

                </div>

                <div className="border-b border-white/5 pb-5">

                  <div className="flex items-center gap-3 mb-2">

                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

                    <p className="text-lg text-gray-300">
                      Aisha K. — Full Stack Course
                    </p>

                  </div>

                  <p className="text-gray-500 ml-6 text-sm">
                    20 min ago · Student
                  </p>

                </div>

                <div className="border-b border-white/5 pb-5">

                  <div className="flex items-center gap-3 mb-2">

                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

                    <p className="text-lg text-gray-300">
                      Vishnu Das — React Developer role
                    </p>

                  </div>

                  <p className="text-gray-500 ml-6 text-sm">
                    1 hr ago · Candidate
                  </p>

                </div>

                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <div className="w-3 h-3 rounded-full bg-purple-300"></div>

                    <p className="text-lg text-gray-300">
                      TechBridge Co. — Digital Marketing
                    </p>

                  </div>

                  <p className="text-gray-500 ml-6 text-sm">
                    3 hrs ago · Client
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT PANEL */}

            <div className="bg-[#0B1020] border border-white/5 rounded-[28px] p-6">

              <h2 className="text-2xl font-bold mb-8">
                Enquiry breakdown
              </h2>

              {/* BAR */}

              <div className="space-y-6">

                <div>

                  <div className="flex items-center justify-between mb-3">

                    <p className="text-gray-400">
                      Clients
                    </p>

                    <p className="text-gray-500">
                      55%
                    </p>

                  </div>

                  <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">

                    <div className="w-[55%] h-full bg-purple-500 rounded-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex items-center justify-between mb-3">

                    <p className="text-gray-400">
                      Students
                    </p>

                    <p className="text-gray-500">
                      30%
                    </p>

                  </div>

                  <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">

                    <div className="w-[30%] h-full bg-cyan-400 rounded-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex items-center justify-between mb-3">

                    <p className="text-gray-400">
                      Candidates
                    </p>

                    <p className="text-gray-500">
                      15%
                    </p>

                  </div>

                  <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">

                    <div className="w-[15%] h-full bg-yellow-400 rounded-full"></div>

                  </div>

                </div>

              </div>

              {/* QUICK ACTIONS */}

              <div className="mt-10 border-t border-white/5 pt-8">

                <h2 className="text-2xl font-bold mb-6">
                  Quick actions
                </h2>

                <div className="flex flex-wrap gap-4">

                  <button className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all">

                    New post

                  </button>

                  <button className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all">

                    Add project

                  </button>

                  <button className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all">

                    Post job

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}