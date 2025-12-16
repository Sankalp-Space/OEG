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
    <div className="min-h-screen bg-slate-50">
      {/* Header - Only show for course and admin-login views */}
      {currentView !== "admin-dashboard" && (
        <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/oeg.png"
                  alt="OEG Learning Logo"
                  className="w-12 h-12 rounded-xl shadow-sm"
                />
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                    OEG Learning
                  </h1>
                  <p className="text-sm text-slate-600">Professional Training Platform</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => setCurrentView("admin-login")}
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                >
                  Admin Access
                </button>
                <button
                  onClick={() => setShowFeedback(true)}
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md text-sm sm:text-base"
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
            <div className="bg-white border-b border-slate-200 p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h4a2 2 0 110 4H8a2 2 0 01-2-2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Oracle Fusion Lease Accounting</h1>
                  <p className="text-slate-600 text-base sm:text-lg">Advanced Course Module</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-slate-600">
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
