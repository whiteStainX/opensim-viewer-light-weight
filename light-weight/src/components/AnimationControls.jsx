import React from 'react';
import useStore from '../store/useStore';
import { FaPlay, FaPause } from 'react-icons/fa';

const AnimationControls = () => {
  const {
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
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4 text-white">
      <div className="flex items-center justify-center space-x-4">
        <button onClick={handlePlayPause} className="focus:outline-none">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <input
          type="range"
          min="0"
          max={numFrames - 1}
          value={currentFrame}
          onChange={handleSliderChange}
          className="w-64"
        />
        <span>{currentFrame}</span>
        <select value={animationSpeed} onChange={handleSpeedChange}>
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="2">2x</option>
        </select>
        <select value={currentAnimation || ''} onChange={handleAnimationChange}>
          {animations.map((anim) => (
            <option key={anim.name} value={anim.name}>
              {anim.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AnimationControls;
