import Sidebar from './components/Sidebar';
import Viewer from './components/Viewer';
import useStore from './store/useStore';

function App() {
  const { isSidebarOpen } = useStore();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className={`flex-1 p-4 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
        <Viewer />
      </main>
    </div>
  );
}

export default App;