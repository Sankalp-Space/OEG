import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-2">
          Oracle Fusion Lease Accounting
        </h1>

        <p className="text-gray-600 mb-4">
          Identifying Leasing Arrangements
        </p>

        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
