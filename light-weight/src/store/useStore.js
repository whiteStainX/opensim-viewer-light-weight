import { create } from 'zustand';

const useStore = create((set) => ({
  // State for the selected lift
  selectedLift: 'squat',
  setSelectedLift: (lift) => set({ selectedLift: lift }),

  // State for the sidebar
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
