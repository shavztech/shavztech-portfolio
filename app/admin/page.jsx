"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetchProjects();

  }, []);

  async function fetchProjects() {

    const { data, error } = await supabase
      .from("projects")
      .select("*");

    if (!error) {

      setProjects(data);

    }

  }

  async function addProject() {

    await supabase
      .from("projects")
      .insert([
        {
          project: "New Website",
          client: "ShavzTech Client",
          type: "Web Development",
          status: "Live",
        },
      ]);

    fetchProjects();

  }

  async function deleteProject(id) {

    await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    fetchProjects();

  }

  return (

    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}

      <div className="w-64 border-r border-gray-800 p-6">

        <h1 className="text-2xl font-bold mb-10">
          SHAVZTECH
        </h1>

        <div className="space-y-4 text-gray-400">

          <p>Dashboard</p>

          <p className="text-purple-400">
            Projects
          </p>

          <p>Testimonials</p>

        </div>

      </div>

      {/* Main */}

      <div className="flex-1 p-10">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-3xl font-bold">
              Portfolio projects
            </h1>

            <p className="text-gray-500 mt-2">
              Showcase your client work
            </p>

          </div>

          <button
            className="border border-gray-700 px-5 py-2 rounded-xl"
          >
            View site
          </button>

        </div>

        {/* Table Card */}

        <div className="border border-gray-800 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl font-semibold">
              Portfolio projects
            </h2>

            <button
              onClick={addProject}
              className="bg-purple-600 px-5 py-2 rounded-xl"
            >
              Add project
            </button>

          </div>

          {/* Table Header */}

          <div className="grid grid-cols-5 text-gray-500 border-b border-gray-800 pb-4 mb-6">

            <p>PROJECT</p>

            <p>CLIENT</p>

            <p>TYPE</p>

            <p>STATUS</p>

            <p>ACTIONS</p>

          </div>

          {/* Rows */}

          <div className="space-y-6">

            {projects.map((item) => (

              <div
                key={item.id}
                className="grid grid-cols-5 items-center"
              >

                <p className="font-semibold">
                  {item.project}
                </p>

                <p className="text-gray-400">
                  {item.client}
                </p>

                <p className="text-gray-400">
                  {item.type}
                </p>

                <div>

                  <span className="bg-green-900 text-green-400 px-4 py-1 rounded-full text-sm">
                    {item.status}
                  </span>

                </div>

                <button
                  onClick={() =>
                    deleteProject(item.id)
                  }
                  className="border border-red-500 text-red-500 px-4 py-1 rounded-xl w-fit"
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}