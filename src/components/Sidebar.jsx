function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-900 p-6 md:block">
      <h2 className="text-2xl font-bold text-blue-400">
        PrepTracker
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Interview preparation
      </p>
      <div className="mt-10 rounded-lg bg-blue-600 px-4 py-3">
        Dashboard
      </div>
    </aside>
  );
}
export default Sidebar;