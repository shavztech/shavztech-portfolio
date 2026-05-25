"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { supabase } from "@/lib/supabase";

export default function ProjectsPage() {

  const [projects, setProjects] = useState([]);

  const [project, setProject] = useState("");
  const [client, setClient] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {

    fetchProjects();

  }, []);

  async function fetchProjects() {

    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });

    setProjects(data || []);

  }

  async function addProject() {

    if (
      !project ||
      !client ||
      !type ||
      !status
    ) {

      alert("Fill all fields");

      return;

    }

    await supabase
      .from("projects")
      .insert([
        {
          project,
          client,
          type,
          status,
        },
      ]);

    setProject("");
    setClient("");
    setType("");
    setStatus("");

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

    <div className="min-h-screen bg-[#070B14] text-white flex">

      <Sidebar />

      <div className="flex-1 overflow-y-auto">

        <div className="max-w-[1300px] mx-auto px-10 py-10 space-y-10">

          {/* HEADER */}

          <div>

            <h1 className="text-[52px] font-black mb-3">
              Projects Management
            </h1>

            <p className="text-gray-400 text-[16px]">
              Create and manage projects
            </p>

          </div>

          {/* FORM */}

          <div className="bg-[#101726] border border-white/10 rounded-[32px] p-10">

            <h2 className="text-4xl font-black mb-3">
              Add Project
            </h2>

            <p className="text-gray-400 mb-8">
              Publish portfolio projects
            </p>

            <div className="grid grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Project Name"
                value={project}
                onChange={(e) =>
                  setProject(e.target.value)
                }
                className="bg-[#0B1020] border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Client Name"
                value={client}
                onChange={(e) =>
                  setClient(e.target.value)
                }
                className="bg-[#0B1020] border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Project Type"
                value={type}
                onChange={(e) =>
                  setType(e.target.value)
                }
                className="bg-[#0B1020] border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="bg-[#0B1020] border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

            </div>

            <div className="flex justify-center mt-8">

              <button
                onClick={addProject}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-2xl font-semibold"
              >
                Add Project
              </button>

            </div>

          </div>

          {/* PROJECT LIST */}

          <div className="space-y-6">

            {projects.map((item) => (

              <div
                key={item.id}
                className="bg-[#101726] border border-white/10 rounded-[28px] p-8 flex items-center justify-between"
              >

                <div>

                  <div className="flex items-center gap-4 mb-3">

                    <h2 className="text-2xl font-bold">
                      {item.project}
                    </h2>

                    <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
                      {item.status}
                    </span>

                  </div>

                  <p className="text-gray-400 mb-2">
                    Client: {item.client}
                  </p>

                  <p className="text-gray-500">
                    Type: {item.type}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteProject(item.id)
                  }
                  className="bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-3 rounded-xl"
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