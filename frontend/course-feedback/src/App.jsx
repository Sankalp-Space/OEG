import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import FeedbackModal from "./components/FeedbackModal";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [currentView, setCurrentView] = useState("course");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleFeedbackSubmit = () => {
    setShowFeedback(false);
    // You could add a success message or animation here
  };

  const handleAdminLogin = () => {
    setCurrentView("admin-dashboard");
  };

  const handleAdminLogout = () => {
    setCurrentView("course");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header - Only show for course and admin-login views */}
      {currentView !== "admin-dashboard" && (
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 010-1.848l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">OEG Learning</h1>
                  <p className="text-sm text-gray-600">Professional Training Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentView("admin-login")}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Admin Access
                </button>
                <button
                  onClick={() => setShowFeedback(true)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      {currentView === "course" && (
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Course Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h4a2 2 0 110 4H8a2 2 0 01-2-2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-1">Oracle Fusion Lease Accounting</h1>
                  <p className="text-blue-100 text-lg">Advanced Course Module</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span>2 hours 30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Certificate Included</span>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Course Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Master the fundamentals of lease accounting in Oracle Fusion applications.
                  This comprehensive course covers identifying leasing arrangements, classification,
                  and implementation best practices.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lease Identification</h4>
                      <p className="text-gray-600 text-sm">Learn to identify and classify different types of lease arrangements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Implementation</h4>
                      <p className="text-gray-600 text-sm">Practical implementation in Oracle Fusion environment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Lesson</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Identifying Leasing Arrangements</strong> - Understanding the key criteria for lease identification
                  according to accounting standards.
                </p>
                <VideoPlayer />
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowFeedback(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                  Share Your Feedback
                </button>
                <p className="text-gray-500 mt-3">Help us improve this course for future learners</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {currentView === "admin-login" && (
        <AdminLogin onLogin={handleAdminLogin} />
      )}

      {currentView === "admin-dashboard" && (
        <AdminDashboard onLogout={handleAdminLogout} />
      )}

      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackModal
          onClose={() => setShowFeedback(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
}

export default App;
