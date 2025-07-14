"use client";

export default function SearchInput({
  searchQuery,
  setSearchQuery,
  extensions,
}: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  extensions: Array<{
    id: number;
    name: string;
    description: string;
    icon: string;
    enabled: boolean;
  }>;
}) {
  const filteredExtensions = extensions.filter((ext) =>
    ext.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative mx-auto w-full max-w-md"> {/* Center the input */}
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search extensions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      />

      {/* Auto-suggestions Dropdown */}
      {searchQuery && filteredExtensions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
          <ul className="list-none">
            {filteredExtensions.map((ext) => (
              <li
                key={ext.id}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center space-x-4"
                onClick={() => setSearchQuery(ext.name)}
              >
                <img
                  src={ext.icon}
                  alt={`${ext.name} icon`}
                  className="w-6 h-6 rounded-full"
                />
                <span>{ext.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
