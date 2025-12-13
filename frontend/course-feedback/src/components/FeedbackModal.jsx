import { useState } from "react";

export default function FeedbackModal({ onClose, onSubmit }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!rating) {
      setError("Rating is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append('rating', rating);
      formData.append('comment', comment);
      formData.append('video_id', 'HKLnBv3wxUg');

      const response = await fetch('http://localhost/OEG/backend/submit_feedback.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status === 'success') {
        onSubmit();
      } else {
        setError(data.message || 'Failed to submit feedback');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Course Feedback
        </h2>

        <label className="block mb-2 font-medium">
          Rating (1–5) *
        </label>
        <select
          className="w-full border rounded p-2 mb-4"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">
          Feedback (optional)
        </label>
        <textarea
          className="w-full border rounded p-2 mb-4"
          rows="3"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Close
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
