import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import ProgressBar from "./components/ProgressBar";
import QuestionForm from "./components/QuestionForm";
import QuestionFilters from "./components/QuestionFilters";
import QuestionList from "./components/QuestionList";

function App() {
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem("questions");
    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });

  const [machineCodingDone, setMachineCodingDone] = useState(() => {
    return localStorage.getItem("machineCodingDone") === "true";
  });

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem("machineCodingDone", machineCodingDone);
  }, [machineCodingDone]);

  function addQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function updateStatus(id, newStatus) {
    const updatedQuestions = questions.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }

      return item;
    });

    setQuestions(updatedQuestions);
  }

  function deleteQuestion(id) {
    const updatedQuestions = questions.filter((item) => {
      return item.id !== id;
    });

    setQuestions(updatedQuestions);
  }

  const filteredQuestions = questions.filter((item) => {
    const matchesSearch = item.question
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || item.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    const matchesDifficulty =
      difficultyFilter === "All" || item.difficulty === difficultyFilter;

    return (
      matchesSearch && matchesCategory && matchesStatus && matchesDifficulty
    );
  });

  const totalQuestions = questions.length;

  const completedDSA = questions.filter((item) => {
    return item.category === "DSA" && item.status === "Completed";
  }).length;

  const completedInterview = questions.filter((item) => {
    return (
      (item.category === "Git" || item.category === "Technical") &&
      item.status === "Completed"
    );
  }).length;

  const completedQuestions = questions.filter((item) => {
    return item.status === "Completed";
  }).length;

  let progress = 0;

  if (totalQuestions > 0) {
    progress = Math.round((completedQuestions / totalQuestions) * 100);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1 p-5 md:p-8">
          <header className="mb-8">
            <p className="text-sm text-slate-400">Interview Preparation</p>

            <h1 className="mt-2 text-3xl font-bold">My Dashboard</h1>

            <p className="mt-2 text-slate-400">
              Track your learning and stay consistent.
            </p>
          </header>

          <DashboardCards
            totalQuestions={totalQuestions}
            completedDSA={completedDSA}
            completedInterview={completedInterview}
            machineCodingDone={machineCodingDone}
            setMachineCodingDone={setMachineCodingDone}
          />
          <ProgressBar
            progress={progress}
            completedQuestions={completedQuestions}
            totalQuestions={totalQuestions}
          />
          <QuestionForm addQuestion={addQuestion} />

          <QuestionFilters
            search={search}
            setSearch={setSearch}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            difficultyFilter={difficultyFilter}
            setDifficultyFilter={setDifficultyFilter}
          />
          <QuestionList
            questions={filteredQuestions}
            updateStatus={updateStatus}
            deleteQuestion={deleteQuestion}
          />
          <footer className="py-8 text-center text-sm text-slate-500">
            Interview Practice Tracker
          </footer>
        </main>
      </div>
    </div>
  );
}
export default App;
