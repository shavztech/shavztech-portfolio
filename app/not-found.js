import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <p className="text-gray-400 mb-6">
        Page not found
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}