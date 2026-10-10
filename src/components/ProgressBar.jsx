function ProgressBar({
  progress,
  completedQuestions,
  totalQuestions,
}) {
  return (
    <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">
          Overall Progress
        </h2>
        <span className="text-blue-400">{progress}%</span>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-3 text-sm text-slate-400">
        {completedQuestions} of {totalQuestions} questions completed
      </p>
    </div>
  );
}
export default ProgressBar;