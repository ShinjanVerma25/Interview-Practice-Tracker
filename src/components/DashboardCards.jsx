function DashboardCards({
  totalQuestions,
  completedDSA,
  completedInterview,
  machineCodingDone,
  setMachineCodingDone,
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Total Questions</p>
        <h3 className="mt-3 text-3xl font-bold">
          {totalQuestions}
        </h3>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Completed DSA</p>
        <h3 className="mt-3 text-3xl font-bold text-green-400">
          {completedDSA}
        </h3>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">
          Completed Interview Questions
        </p>
        <h3 className="mt-3 text-3xl font-bold text-purple-400">
          {completedInterview}
        </h3>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">Machine Coding</p>
        <h3 className="mt-3 text-xl font-bold">
          {machineCodingDone ? "Completed" : "Pending"}
        </h3>
        <button
          onClick={() => setMachineCodingDone(!machineCodingDone)}
          className="mt-3 rounded-lg bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700"
        >
          {machineCodingDone ? "Mark Pending" : "Mark Completed"}
        </button>
      </div>
    </div>
  );
}
export default DashboardCards;