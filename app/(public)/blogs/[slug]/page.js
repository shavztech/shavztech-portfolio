import React from "react";

export default function BlogPostDetail({ params }) {
  const { slug } = params || {};
  return (
    <div className="min-h-screen bg-[#03050c] flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-2xl font-bold">Blog Article Details</h1>
      <p className="text-slate-400 mt-2">Viewing details for slug: {slug}</p>
    </div>
  );
}
