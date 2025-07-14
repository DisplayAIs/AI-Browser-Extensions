"use client";

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-5xl px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/path-to-your-icon.png" // Replace with your logo/icon path
            alt="Logo"
            className="w-6 h-6"
          />
          <span className="text-xl font-bold text-blue-900">Extensions</span>
        </div>

        {/* Button */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
          <img
            src="/path-to-reload-icon.png" // Replace with your refresh/reload icon path
            alt="Reload"
            className="w-5 h-5"
          />
        </button>
      </div>
    </header>
  );
}
