import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white p-4">
      <h2 className="text-lg font-bold mb-4">Controls</h2>
      {/* Placeholder for controls */}
      <div className="space-y-4">
        <div>
          <label htmlFor="lift-select" className="block text-sm font-medium text-gray-700">Select Lift</label>
          <select id="lift-select" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Squat</option>
            <option>Bench Press</option>
            <option>Deadlift</option>
          </select>
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Play</button>
        <div>
          <label htmlFor="scrubber" className="block text-sm font-medium text-gray-700">Animation</label>
          <input type="range" id="scrubber" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
