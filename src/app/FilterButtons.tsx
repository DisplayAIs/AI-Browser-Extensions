"use client";

export default function FilterButtons({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg ${
          filter === "all"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`px-4 py-2 rounded-lg ${
          filter === "active"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("inactive")}
        className={`px-4 py-2 rounded-lg ${
          filter === "inactive"
            ? "bg-red-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Inactive
      </button>
    </div>
  );
}
