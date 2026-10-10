import { useState } from "react";
function QuestionForm({ addQuestion }) {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Easy");
  const [status, setStatus] = useState("Pending");
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (question.trim() === "") {
      setError("Please enter a question.");
      return;
    }
    const newQuestion = {
      id: Date.now(),
      question: question.trim(),
      category,
      difficulty,
      status,
    };
    addQuestion(newQuestion);
    setQuestion("");
    setCategory("DSA");
    setDifficulty("Easy");
    setStatus("Pending");
    setError("");
  }
  return (
    <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">Add New Question</h2>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Question Name
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter a question..."
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-3"
            >
              <option value="DSA">DSA</option>
              <option value="Git">Git & GitHub</option>
              <option value="Technical">Technical</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-3"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-3"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-500"
        >
          Add Question
        </button>
      </form>
    </div>
  );
}
export default QuestionForm;