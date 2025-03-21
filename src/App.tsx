import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import { Question } from "./types/quizTypes";
import { fetchQuizQuestions } from "./services/quizService";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate();

  // Función para iniciar el quiz y obtener preguntas
  const onStart = async () => {
    setCorrectAnswers(0); // ✅ Resetea el puntaje antes de iniciar un nuevo quiz

    const data = await fetchQuizQuestions();
    if (data.length > 0) {
      setQuestions(data);
      navigate("/quiz");
    } else {
      console.error("No se pudieron cargar las preguntas.");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home onStart={onStart} />} />
      <Route
        path="/quiz"
        element={<Quiz questions={questions} setCorrectAnswers={setCorrectAnswers} />}
      />
      <Route
        path="/results"
        element={<Results correctAnswers={correctAnswers} />}
      />
    </Routes>
  );
}

export default App;
