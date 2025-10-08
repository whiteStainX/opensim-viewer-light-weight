import AppBar from './AppBar';
import DropFile from './DropFile';

function App() {
  return (
    <div>
      <AppBar />
      <div className="p-4">
        <DropFile />
      </div>
    </div>
  );
}

export default App;
