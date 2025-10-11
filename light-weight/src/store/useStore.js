import { create } from 'zustand';

const useStore = create((set) => ({
  // State for the selected lift
  selectedLift: 'squat',
  setSelectedLift: (lift) => set({ selectedLift: lift }),

  // State for the sidebar
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  // State for animation
  animations: [],
  setAnimations: (animations) => set({ animations }),
  currentAnimation: null,
  setCurrentAnimation: (animation) => set({ currentAnimation: animation }),
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  animationSpeed: 1,
  setAnimationSpeed: (speed) => set({ animationSpeed: speed }),
  currentFrame: 0,
  setCurrentFrame: (frame) => set({ currentFrame: frame }),
  numFrames: 0,
  setNumFrames: (numFrames) => set({ numFrames }),
}));

export default useStore;
