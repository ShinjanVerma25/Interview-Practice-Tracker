function QuestionList({
  questions,
  updateStatus,
  deleteQuestion,
}) {
  return (
    <div className="mt-5 space-y-4">
      {questions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">
          <h3 className="font-semibold">No questions found</h3>

          <p className="mt-2 text-sm text-slate-400">
            Add a question or change your search and filters.
          </p>
        </div>
      ) : (
        questions.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="min-w-0">
                <h3 className="break-words font-semibold">
                  {item.question}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-blue-950 px-3 py-1 text-blue-300">
                    {item.category}
                  </span>

                  <span className="rounded-full bg-purple-950 px-3 py-1 text-purple-300">
                    {item.difficulty}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={item.status}
                  onChange={(e) =>
                    updateStatus(item.id, e.target.value)
                  }
                  className="max-w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>

                <button
                  onClick={() => deleteQuestion(item.id)}
                  className="rounded-lg bg-red-950 px-3 py-2 text-sm text-red-300 hover:bg-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default QuestionList;