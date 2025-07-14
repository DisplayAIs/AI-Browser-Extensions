export default function ExtensionCard({
  name,
  description,
  icon,
  enabled,
  onToggle,
  onRemove,
}: {
  name: string;
  description: string;
  icon: string; // URL or path for the icon image
  enabled: boolean;
  onToggle: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="bg-gray-100 shadow-md rounded-md w-full max-w-[16rem] p-6 m-2 flex flex-col space-y-6">
      {/* Header with Icon and Name */}
      <div className="flex items-center space-x-4">
        <img src={icon} alt={`${name} icon`} className="w-10 h-10" />
        <h3 className="text-sm font-medium">{name}</h3>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600">{description}</p>

      {/* Actions: Toggle and Remove */}
      <div className="flex items-center justify-between">
        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Remove
        </button>

        {/* Toggle Button */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={enabled}
            onChange={onToggle}
            className="sr-only peer"
          />
          <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-red-500 peer-focus:ring-2 peer-focus:ring-red-300 transition-all"></div>
          <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></span>
        </label>
      </div>
    </div>
  );
}
