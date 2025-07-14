"use client";

import ExtensionCard from "./ExtensionCard";
import FilterButtons from "./FilterButtons";
import SearchInput from "./SearchInput";
import Header from './HeaderComponent';
import { useState } from "react";

export default function Page() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const [extensions, setExtensions] = useState([
    {
      id: 1,
      name: "SpeedBoost",
      description: "Optimizes browser resource usage to accelerate page loading.",
      icon: "/images/icon-moon.svg", // Replace with your icon path
      enabled: true,
    },
    {
      id: 2,
      name: "CodeFormatter",
      description: "Automatically formats your code for better readability.",
      icon: "/images/icon-moon.svg", // Replace with your icon path
      enabled: false,
    },
    {
      id: 3,
      name: "CodeFormatter",
      description: "Automatically formats your code for better readability.",
      icon: "/images/icon-moon.svg", // Replace with your icon path
      enabled: false,
    },
  ]);

  

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.enabled;
    if (filter === "inactive") return !ext.enabled;

    // Search extensions by name or description
    if (
      !ext.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !ext.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const handleToggle = (id: number) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, enabled: !ext.enabled } : ext
      )
    );
  };

  const handleRemove = (id: number) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4"> {/* Shared wrapper */}
    {/* Header Component */}
    <Header />

    <div className="flex items-center justify-center min-h-screen">

      <div className="p-6">
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        extensions={extensions}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
        <h1 className="text-2xl font-bold mb-4 text-center">Extensions List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {filteredExtensions.map((ext) => (
          <ExtensionCard
            key={ext.id}
            name={ext.name}
            description={ext.description}
            icon={ext.icon}
            enabled={ext.enabled}
            onToggle={() =>
              setExtensions((prev) =>
                prev.map((e) =>
                  e.id === ext.id ? { ...e, enabled: !e.enabled } : e
                )
              )
            }
            onRemove={() =>
              setExtensions((prev) => prev.filter((e) => e.id !== ext.id))
            }
          />
        ))}
      </div>
      </div>
    </div>
    </div>
  );  
}
