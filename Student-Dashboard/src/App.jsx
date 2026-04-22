import { useState } from "react";
import Header from "../components/Header";
import AddStudentForm from "../components/AddStudentForm";
import StudentTable from "../components/StudentTable";
import "./App.css";
import Stats from "../components/stats";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ansh", score: 78 },
    { id: 2, name: "Alex", score: 45 },
  ]);

  const addStudent = (name, score) => {
    setStudents([
      ...students,
      { id: Date.now(), name, score: Number(score) },
    ]);
  };

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, score: newScore } : s
      )
    );
  };

  return (
    <div>
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <Stats students={students}/> 
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;