import { useEffect, useRef, useState } from "react";
import FeedbackModal from "./FeedbackModal";

const VIDEO_DURATION = 600; // seconds (mock for YouTube)

export default function VideoPlayer() {
  const [showModal, setShowModal] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const intervalRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      progressRef.current += 10;

      const percentage =
        (progressRef.current / VIDEO_DURATION) * 100;

      if (
        percentage >= 95 &&
        !submitted &&
        attempts < 2 &&
        !showModal
      ) {
        setShowModal(true);
        setAttempts((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [attempts, submitted, showModal]);

  return (
    <>
      <div className="relative w-full h-[300px] mb-4">
        <iframe
          className="w-full h-full rounded"
          src="https://www.youtube.com/embed/HKLnBv3wxUg"
          title="Oracle Course"
          allowFullScreen
        ></iframe>
      </div>

      {showModal && (
        <FeedbackModal
          onClose={() => setShowModal(false)}
          onSubmit={() => {
            setSubmitted(true);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

