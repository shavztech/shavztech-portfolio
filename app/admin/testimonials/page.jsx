"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { supabase } from "../../../lib/supabase";

export default function TestimonialsPage() {

  const [testimonials, setTestimonials] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [quote, setQuote] = useState("");
  const [stars, setStars] = useState("");

  useEffect(() => {

    fetchTestimonials();

  }, []);

  async function fetchTestimonials() {

    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("id", { ascending: false });

    setTestimonials(data || []);

  }

  async function saveTestimonial() {

    if (
      !name ||
      !company ||
      !quote ||
      !stars
    ) {

      alert("Fill all fields");

      return;

    }

    if (editingId) {

      await supabase
        .from("testimonials")
        .update({
          name,
          company,
          quote,
          stars,
        })
        .eq("id", editingId);

    } else {

      await supabase
        .from("testimonials")
        .insert([
          {
            name,
            company,
            quote,
            stars,
          },
        ]);

    }

    resetForm();

    fetchTestimonials();

  }

  async function deleteTestimonial(id) {

    await supabase
      .from("testimonials")
      .delete()
      .eq("id", id);

    fetchTestimonials();

  }

  function editTestimonial(item) {

    setEditingId(item.id);

    setName(item.name);
    setCompany(item.company);
    setQuote(item.quote);
    setStars(item.stars);

    setShowForm(true);

  }

  function resetForm() {

    setEditingId(null);

    setName("");
    setCompany("");
    setQuote("");
    setStars("");

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
                Testimonials
              </h1>

              <p className="text-gray-500">
                Client & student reviews
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
                  : "Add testimonial"
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
                      ? "Edit Testimonial"
                      : "Add Testimonial"
                  }

                </h2>

                <div className="grid grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Client Name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) =>
                      setCompany(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Stars (★★★★★)"
                    value={stars}
                    onChange={(e) =>
                      setStars(e.target.value)
                    }
                    className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                  />

                </div>

                <textarea
                  placeholder="Review / Quote"
                  value={quote}
                  onChange={(e) =>
                    setQuote(e.target.value)
                  }
                  className="bg-[#070B14] border border-white/10 rounded-2xl px-5 py-4 outline-none w-full mt-5 min-h-[140px]"
                />

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={saveTestimonial}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl"
                  >

                    {
                      editingId
                        ? "Update Testimonial"
                        : "Save Testimonial"
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

            <p>Name</p>
            <p>Company</p>
            <p>Quote</p>
            <p>Stars</p>
            <p>Actions</p>

          </div>

          <div className="divide-y divide-white/5">

            {testimonials.map((item) => (

              <div
                key={item.id}
                className="grid grid-cols-5 items-center py-6"
              >

                <p className="font-semibold text-lg">
                  {item.name}
                </p>

                <p className="text-gray-400">
                  {item.company}
                </p>

                <p className="text-gray-400 truncate">
                  {item.quote}
                </p>

                <p className="text-yellow-400">
                  {item.stars}
                </p>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      editTestimonial(item)
                    }
                    className="text-blue-400 border border-blue-500/20 px-4 py-2 rounded-xl"
                  >

                    Edit

                  </button>

                  <button
                    onClick={() =>
                      deleteTestimonial(item.id)
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