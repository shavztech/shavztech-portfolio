"use client";

import Link from "next/link";

export default function Sidebar() {

  return (

    <div className="w-[270px] bg-[#0B1020] border-r border-white/5 px-6 py-8 flex flex-col min-h-screen">

      {/* LOGO */}

      <div className="mb-14">

        <h1 className="text-3xl font-black text-white mb-2">
          SHAVZTECH
        </h1>

        <p className="text-xs tracking-[3px] text-gray-500 uppercase">
          Mini CMS · Solutions LLP
        </p>

      </div>

      {/* MENU */}

      <div className="space-y-10">

        {/* OVERVIEW */}

        <div>

          <p className="text-[11px] tracking-[3px] text-gray-600 uppercase mb-4">
            Overview
          </p>

          <div className="space-y-2">

            <Link href="/admin">

              <div className="px-5 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer">

                <p className="text-[17px] text-gray-300">
                  Dashboard
                </p>

              </div>

            </Link>

          </div>

        </div>

        {/* CONTENT */}

        <div>

          <p className="text-[11px] tracking-[3px] text-gray-600 uppercase mb-4">
            Content
          </p>

          <div className="space-y-2">

            <Link href="/admin/blogs">

              <div className="px-5 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer">

                <p className="text-[17px] text-gray-300">
                  Blog posts
                </p>

              </div>

            </Link>

            <Link href="/admin/projects">

              <div className="px-5 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer">

                <p className="text-[17px] text-gray-300">
                  Projects
                </p>

              </div>

            </Link>

            <Link href="/admin/testimonials">

              <div className="px-5 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer">

                <p className="text-[17px] text-gray-300">
                  Testimonials
                </p>

              </div>

            </Link>

          </div>

        </div>

        {/* LEADS */}

        <div>

          <p className="text-[11px] tracking-[3px] text-gray-600 uppercase mb-4">
            Leads
          </p>

          <div className="space-y-2">

            <Link href="/admin/enquiries">

              <div className="flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer">

                <p className="text-[17px] text-gray-300">
                  Enquiries
                </p>

                <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  4
                </div>

              </div>

            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="mt-auto">

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">

          <p className="font-semibold text-lg">
            Shavztech
          </p>

          <p className="text-gray-500 text-sm mt-1">
            Admin Panel
          </p>

        </div>

      </div>

    </div>

  );

}