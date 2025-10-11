import React from 'react';
import useStore from '../store/useStore';
import { FaArrowLeft, FaBars, FaPlay, FaPause } from 'react-icons/fa';

const Sidebar = () => {
  const {
    selectedLift,
    setSelectedLift,
    isSidebarOpen,
    toggleSidebar,
    animations,
    currentAnimation,
    setCurrentAnimation,
    isPlaying,
    setIsPlaying,
    animationSpeed,
    setAnimationSpeed,
    currentFrame,
    setCurrentFrame,
    numFrames,
  } = useStore();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (e) => {
    setCurrentFrame(Number(e.target.value));
  };

  const handleSpeedChange = (e) => {
    setAnimationSpeed(Number(e.target.value));
  };

  const handleAnimationChange = (e) => {
    setCurrentAnimation(e.target.value);
    setCurrentFrame(0);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-30 text-white bg-gray-800 p-2 rounded-md"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-gray-800 text-white h-full z-20 transform transition-transform duration-300
          fixed md:relative
          w-64 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 ${isSidebarOpen ? 'md:w-64' : 'md:w-16'}
        `}
      >
        <div className="p-4 flex justify-between items-center">
          {isSidebarOpen && <h2 className="text-lg font-bold">Controls</h2>}
          <button onClick={toggleSidebar} className="text-white hover:text-gray-400 hidden md:block">
            <FaArrowLeft className={`transform transition-transform duration-300 ${!isSidebarOpen && 'rotate-180'}`} />
          </button>
        </div>
        {isSidebarOpen && (
          <div className="p-4 space-y-4">
            <div>
              <label htmlFor="lift-select" className="block text-sm font-medium text-gray-400">Select Lift</label>
              <select
                id="lift-select"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={selectedLift}
                onChange={(e) => setSelectedLift(e.target.value)}
              >
                <option value="squat">Squat</option>
                <option value="bench">Bench Press</option>
                <option value="deadlift">Deadlift</option>
                <option value="gait">Gait</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={handlePlayPause} className="focus:outline-none">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <input
                type="range"
                min="0"
                max={numFrames - 1}
                value={currentFrame}
                onChange={handleSliderChange}
                className="w-full"
              />
              <span>{currentFrame}</span>
            </div>
            <div>
              <label htmlFor="speed-select" className="block text-sm font-medium text-gray-400">Speed</label>
              <select id="speed-select" value={animationSpeed} onChange={handleSpeedChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="0.25">0.25x</option>
                <option value="0.5">0.5x</option>
                <option value="1">1x</option>
                <option value="2">2x</option>
              </select>
            </div>
            <div>
              <label htmlFor="animation-select" className="block text-sm font-medium text-gray-400">Animation</label>
              <select id="animation-select" value={currentAnimation || ''} onChange={handleAnimationChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {animations.map((anim) => (
                  <option key={anim.name} value={anim.name}>
                    {anim.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
