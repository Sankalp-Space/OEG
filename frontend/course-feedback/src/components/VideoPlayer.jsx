import { useEffect, useRef, useState } from "react";
import FeedbackModal from "./FeedbackModal";

export default function VideoPlayer() {
  const [showModal, setShowModal] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const playerRef = useRef(null);
  const checkIntervalRef = useRef(null);
  const playerInstanceRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame Player API
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    function initializePlayer() {
      if (playerRef.current && !playerInstanceRef.current) {
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          videoId: 'HKLnBv3wxUg',
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            fs: 1,
            enablejsapi: 1
          },
          events: {
            onReady: () => {
              setPlayerReady(true);
              startProgressCheck(); // Start checking immediately when ready
            },
            onStateChange: handleStateChange
          }
        });
      }
    }

    function handleStateChange(event) {
      // Always check progress regardless of play state, but more frequently when playing
      if (event.data === window.YT.PlayerState.PLAYING) {
        startProgressCheck();
      } else if (event.data === window.YT.PlayerState.PAUSED) {
        // Continue checking but less frequently when paused
        startProgressCheck();
      } else if (event.data === window.YT.PlayerState.ENDED) {
        // Check one final time when video ends
        checkProgress();
      }
    }

    return () => {
      stopProgressCheck();
      if (playerInstanceRef.current && playerInstanceRef.current.destroy) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);

  const checkProgress = () => {
    if (playerInstanceRef.current && playerInstanceRef.current.getDuration) {
      try {
        const duration = playerInstanceRef.current.getDuration();
        const currentTime = playerInstanceRef.current.getCurrentTime();

        if (duration > 0) {
          const percentage = (currentTime / duration) * 100;
          setCurrentProgress(percentage);

          // Only trigger modal if we haven't reached max attempts and haven't submitted
          if (
            percentage >= 95 &&
            !submitted &&
            attempts < 2 &&
            !showModal
          ) {
            console.log('Triggering feedback modal at', percentage.toFixed(1) + '% (attempt', attempts + 1, 'of 2)');
            setShowModal(true);
            setAttempts((prev) => prev + 1);
            // Stop checking immediately after triggering to prevent multiple triggers
            stopProgressCheck();
          }
        }
      } catch (error) {
        console.error('Error checking video progress:', error);
      }
    }
  };

  const startProgressCheck = () => {
    if (checkIntervalRef.current) return;

    checkIntervalRef.current = setInterval(() => {
      checkProgress();
    }, 500); // Check every 500ms for more responsive detection
  };

  const stopProgressCheck = () => {
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      checkIntervalRef.current = null;
    }
  };

  const handleModalClose = () => {
    setShowModal(false);

    // Resume progress checking if we haven't reached max attempts and haven't submitted
    if (attempts < 2 && !submitted) {
      setTimeout(() => {
        startProgressCheck();
      }, 5000); // Wait 5 seconds before checking again
    }
  };

  const handleModalSubmit = () => {
    setSubmitted(true);
    setShowModal(false);
    stopProgressCheck(); // Stop all checking since feedback was submitted
  };

  return (
    <>
      <div className="relative w-full h-[300px] mb-4">
        <div ref={playerRef} className="w-full h-full rounded overflow-hidden bg-gray-100 flex items-center justify-center">
          {!playerReady && (
            <div className="text-gray-500">Loading video player...</div>
          )}
        </div>
      </div>

      {/* Progress indicator and demo controls */}
      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-sm font-semibold text-blue-800 mb-2">Video Progress & Demo Controls</h3>
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Progress: {currentProgress.toFixed(1)}%</span>
            <span>Target: 95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(currentProgress, 100)}%` }}
            ></div>
          </div>
        </div>
        <p className="text-xs text-blue-600 mb-3">
          The feedback modal will automatically appear when the video reaches 95% completion.
        </p>
        <div className="mt-2 text-xs text-gray-600">
          Attempts: {attempts}/2 | Submitted: {submitted ? 'Yes' : 'No'} | Player Ready: {playerReady ? 'Yes' : 'No'}
        </div>
        <button
          onClick={() => {
            if (!submitted && attempts < 2 && !showModal) {
              setShowModal(true);
              setAttempts((prev) => prev + 1);
            }
          }}
          className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={submitted || attempts >= 2}
        >
          Test Modal (Manual Trigger)
        </button>
      </div>

      {showModal && (
        <FeedbackModal
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      )}
    </>
  );
}

