import Sidebar from './components/Sidebar';
import Viewer from './components/Viewer';
import useStore from './store/useStore';

function App() {
  const { isSidebarOpen } = useStore();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className={`flex-1 flex flex-col p-4 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
        <div className="flex-grow">
          <Viewer />
        </div>
      </main>
    </div>
  );
}

export default App;