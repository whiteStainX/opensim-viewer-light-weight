import Sidebar from './components/Sidebar';
import Viewer from './components/Viewer';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-4">
        <Viewer />
      </main>
    </div>
  );
}

export default App;