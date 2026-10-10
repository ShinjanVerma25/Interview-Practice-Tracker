function QuestionFilters({
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  difficultyFilter,
  setDifficultyFilter,
}) {
  return (
    <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">Your Questions</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search questions..."
        className="mt-5 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
      />

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3"
        >
          <option value="All">All Categories</option>
          <option value="DSA">DSA</option>
          <option value="Git">Git & GitHub</option>
          <option value="Technical">Technical</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
    </div>
  );
}
export default QuestionFilters;