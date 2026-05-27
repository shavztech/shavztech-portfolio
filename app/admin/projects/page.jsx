"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { supabase } from "../../../lib/supabase";

export default function ProjectsPage() {

  const [projects, setProjects] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

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

  async function saveProject() {

    if (
      !project ||
      !client ||
      !type ||
      !status
    ) {

      alert("Fill all fields");

      return;

    }

    if (editingId) {

      await supabase
        .from("projects")
        .update({
          project,
          client,
          type,
          status,
        })
        .eq("id", editingId);

    } else {

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

    }

    resetForm();

    fetchProjects();

  }

  async function deleteProject(id) {

    await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    fetchProjects();

  }

  function editProject(item) {

    setEditingId(item.id);

    setProject(item.project);
    setClient(item.client);
    setType(item.type);
    setStatus(item.status);

    setShowForm(true);

  }

  function resetForm() {

    setEditingId(null);

    setProject("");
    setClient("");
    setType("");
    setStatus("");

    setShowForm(false);

  }

  return (

    <div className="min-h-screen bg-[#070B14] text-white flex">

      <Sidebar />

      <div className="flex-1 p-10">

        <div className="bg-[#101726] border border-white/10 rounded-3xl p-8">

          {/* TOP */}

          <div className="flex items-center justify-between mb-8">

            <div>

              <h1 className="text-3xl font-black mb-2">
                Portfolio projects
              </h1>

              <p className="text-gray-500">
                Showcase your client work
              </p>

            </div>

            <button
              onClick={() =>
                setShowForm(!showForm)
              }
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl"
            >

              {
                showForm
                  ? "Close"
                  : "Add project"
              }

            </button>

          </div>

          {/* FORM */}

          {
            showForm && (

              <div className="mb-8 bg-[#0B1020] border border-white/10 rounded-3xl p-8">

                <h2 className="text-2xl font-bold mb-6">

                  {
                    editingId
                      ? "Edit Project"
                      : "Add Project"
                  }

                </h2>

                <div className="grid grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Project Name"
                    value={project}
                    onChange={(e) =>
                      setProject(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Client Name"
                    value={client}
                    onChange={(e) =>
                      setClient(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Project Type"
                    value={type}
                    onChange={(e) =>
                      setType(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) =>
                      setStatus(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                </div>

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={saveProject}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl"
                  >

                    {
                      editingId
                        ? "Update Project"
                        : "Save Project"
                    }

                  </button>

                  <button
                    onClick={resetForm}
                    className="border border-white/10 px-6 py-3 rounded-2xl"
                  >

                    Cancel

                  </button>

                </div>

              </div>

            )
          }

          {/* TABLE */}

          <div className="grid grid-cols-5 border-b border-white/10 pb-5 text-gray-500 uppercase text-sm tracking-[2px]">

            <p>Project</p>
            <p>Client</p>
            <p>Type</p>
            <p>Status</p>
            <p>Actions</p>

          </div>

          <div className="divide-y divide-white/5">

            {projects.map((item) => (

              <div
                key={item.id}
                className="grid grid-cols-5 items-center py-6"
              >

                <p className="font-semibold text-lg">
                  {item.project}
                </p>

                <p className="text-gray-400">
                  {item.client}
                </p>

                <p className="text-gray-400">
                  {item.type}
                </p>

                <div>

                  <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">

                    {item.status}

                  </span>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      editProject(item)
                    }
                    className="text-blue-400 border border-blue-500/20 px-4 py-2 rounded-xl"
                  >

                    Edit

                  </button>

                  <button
                    onClick={() =>
                      deleteProject(item.id)
                    }
                    className="text-red-400 border border-red-500/20 px-4 py-2 rounded-xl"
                  >

                    Delete

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}