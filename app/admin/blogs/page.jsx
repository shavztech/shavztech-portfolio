"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { supabase } from "../../../lib/supabase";

export default function BlogsPage() {

  const [blogs, setBlogs] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    fetchBlogs();

  }, []);

  async function fetchBlogs() {

    const { data } = await supabase
      .from("Blog")
      .select("*")
      .order("id", { ascending: false });

    setBlogs(data || []);

  }

  async function saveBlog() {

    if (
      !title ||
      !category ||
      !date ||
      !description
    ) {

      alert("Fill all fields");

      return;

    }

    if (editingId) {

      await supabase
        .from("Blog")
        .update({
          title,
          category,
          date,
          description,
        })
        .eq("id", editingId);

    } else {

      await supabase
        .from("Blog")
        .insert([
          {
            title,
            category,
            date,
            description,
          },
        ]);

    }

    resetForm();

    fetchBlogs();

  }

  async function deleteBlog(id) {

    await supabase
      .from("Blog")
      .delete()
      .eq("id", id);

    fetchBlogs();

  }

  function editBlog(item) {

    setEditingId(item.id);

    setTitle(item.title);
    setCategory(item.category);
    setDate(item.date);
    setDescription(item.description);

    setShowForm(true);

  }

  function resetForm() {

    setEditingId(null);

    setTitle("");
    setCategory("");
    setDate("");
    setDescription("");

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
                Blog posts
              </h1>

              <p className="text-gray-500">
                Manage blog content
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
                  : "Add blog"
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
                      ? "Edit Blog"
                      : "Add Blog"
                  }

                </h2>

                <div className="grid grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) =>
                      setTitle(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Publish Date"
                    value={date}
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                </div>

                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none w-full mt-5 min-h-[140px]"
                />

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={saveBlog}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl"
                  >

                    {
                      editingId
                        ? "Update Blog"
                        : "Save Blog"
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

            <p>Title</p>
            <p>Category</p>
            <p>Date</p>
            <p>Status</p>
            <p>Actions</p>

          </div>

          <div className="divide-y divide-white/5">

            {blogs.map((item) => (

              <div
                key={item.id}
                className="grid grid-cols-5 items-center py-6"
              >

                <p className="font-semibold text-lg">
                  {item.title}
                </p>

                <p className="text-gray-400">
                  {item.category}
                </p>

                <p className="text-gray-400">
                  {item.date}
                </p>

                <div>

                  <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">

                    Published

                  </span>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      editBlog(item)
                    }
                    className="text-blue-400 border border-blue-500/20 px-4 py-2 rounded-xl"
                  >

                    Edit

                  </button>

                  <button
                    onClick={() =>
                      deleteBlog(item.id)
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