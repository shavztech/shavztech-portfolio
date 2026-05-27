"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/admin/Sidebar";

import { supabase } from "../../lib/supabase";

export default function AdminPage() {

  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  async function fetchData() {

    // PROJECTS

    const { data: projectsData } =
      await supabase
        .from("projects")
        .select("*");

    setProjects(projectsData || []);

    // BLOGS

    const { data: blogsData } =
      await supabase
        .from("Blog")
        .select("*");

    setBlogs(blogsData || []);

    // TESTIMONIALS

    const { data: testimonialsData } =
      await supabase
        .from("testimonials")
        .select("*");

    setTestimonials(testimonialsData || []);

  }

  return (

    <div className="min-h-screen bg-[#070B14] text-white flex">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="flex-1 p-10">

        {/* TOP */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-4xl font-black mb-2">
              Dashboard
            </h1>

            <p className="text-gray-500">
              SHAVZTECH Solutions LLP
            </p>

          </div>

          <button className="border border-white/10 px-6 py-3 rounded-2xl">

            View site

          </button>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-6 mb-8">

          {/* BLOGS */}

          <div className="bg-[#101726] border border-cyan-500 rounded-3xl p-8">

            <p className="text-gray-500 uppercase text-sm mb-4">
              Blog Posts
            </p>

            <h2 className="text-5xl font-black">
              {blogs.length}
            </h2>

            <p className="text-gray-500 mt-2">
              Total blogs
            </p>

          </div>

          {/* PROJECTS */}

          <div className="bg-[#101726] border border-yellow-500 rounded-3xl p-8">

            <p className="text-gray-500 uppercase text-sm mb-4">
              Projects
            </p>

            <h2 className="text-5xl font-black">
              {projects.length}
            </h2>

            <p className="text-gray-500 mt-2">
              Portfolio projects
            </p>

          </div>

          {/* TESTIMONIALS */}

          <div className="bg-[#101726] border border-pink-500 rounded-3xl p-8">

            <p className="text-gray-500 uppercase text-sm mb-4">
              Testimonials
            </p>

            <h2 className="text-5xl font-black">
              {testimonials.length}
            </h2>

            <p className="text-gray-500 mt-2">
              Client reviews
            </p>

          </div>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-2 gap-8">

          {/* RECENT BLOGS */}

          <div className="bg-[#101726] border border-white/10 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-bold">
                Recent blogs
              </h2>

            </div>

            <div className="space-y-6">

              {
                blogs.slice(0, 4).map((item) => (

                  <div
                    key={item.id}
                    className="border-b border-white/5 pb-5"
                  >

                    <h3 className="font-semibold text-lg mb-2">

                      {item.title}

                    </h3>

                    <p className="text-gray-500">

                      {item.category}

                    </p>

                  </div>

                ))
              }

            </div>

          </div>

          {/* RECENT PROJECTS */}

          <div className="bg-[#101726] border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Recent projects
            </h2>

            <div className="space-y-6">

              {
                projects.slice(0, 4).map((item) => (

                  <div
                    key={item.id}
                    className="border-b border-white/5 pb-5"
                  >

                    <h3 className="font-semibold text-lg mb-2">

                      {item.project}

                    </h3>

                    <p className="text-gray-500">

                      {item.client}

                    </p>

                  </div>

                ))
              }

            </div>

          </div>

        </div>

        {/* TESTIMONIAL SECTION */}

        <div className="bg-[#101726] border border-white/10 rounded-3xl p-8 mt-8">

          <h2 className="text-2xl font-bold mb-8">
            Latest testimonials
          </h2>

          <div className="space-y-6">

            {
              testimonials.slice(0, 3).map((item) => (

                <div
                  key={item.id}
                  className="border-b border-white/5 pb-6"
                >

                  <div className="flex items-center justify-between mb-3">

                    <h3 className="font-semibold text-lg">

                      {item.name}

                    </h3>

                    <p className="text-yellow-400">

                      {item.stars}

                    </p>

                  </div>

                  <p className="text-gray-400">

                    {item.quote}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </div>

  );

}
