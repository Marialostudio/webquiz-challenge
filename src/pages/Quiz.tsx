import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../types/quizTypes";
import { QuizProps } from "../types/quizTypes";

const Quiz = ({ questions, setCorrectAnswers }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [message, setMessage] = useState<string | null>(null);
  const [timeExpired, setTimeExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
    }
  }, [questions, navigate]);

  useEffect(() => {
    if (timeLeft === 0) {
      setMessage("❌ Sorry! Time flies and your chance has gone :(");
      setTimeExpired(true); // Deshabilita respuestas
    } else {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleAnswerSelection = (key: string) => {
    if (!timeExpired) {
      setSelectedAnswer(key);
      setMessage("✅ Ok, press the 'Next' button to dive into the next question.");
    }
  };

  const handleNext = () => {
    // Si no se seleccionó una respuesta, cuenta como incorrecta
    if (selectedAnswer) {
      const key = `${selectedAnswer}_correct` as keyof Question["correct_answers"];
      const isCorrect = questions[currentQuestionIndex].correct_answers[key] === "true";
      if (isCorrect) {
        setCorrectAnswers((prev: number) => prev + 1);
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
      setMessage(null);
      setTimeExpired(false);
    } else {
      navigate("/results");
    }
  };

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  return (
    <section className="w-full h-screen bg-[#C8D2DA] flex items-center justify-center px-[10%] md:px-[20%]">
      {/* Fondo con transparencia */}
      <div className="cover-background-quiz absolute inset-0 bg-cover bg-center opacity-70"></div>

      <div className="quiz-container p-6 max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">{questions[currentQuestionIndex].question}</h2>

      {/* Opciones de respuesta */}
      <div className="flex flex-col gap-2">
        {Object.entries(questions[currentQuestionIndex].answers)
          .filter(([_, answer]) => answer !== null)
          .map(([key, answer]) => (
            <button
              key={key}
              onClick={() => handleAnswerSelection(key)}
              disabled={timeExpired}
              className={`py-2 px-4 rounded-md border border-gray-300 text-lg transition-all ${
                timeExpired
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50" // ⚠️ Visualmente bloqueado
                  : selectedAnswer === key
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {answer}
            </button>
          ))}
      </div>

      {/* Temporizador y barra de progreso */}
      <p className="text-lg font-semibold text-red-600 mt-4">{timeLeft} s</p>
      <div className="w-full bg-gray-200 h-2 rounded-full my-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all"
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        ></div>
      </div>

      {/* Mensaje dinámico */}
      {message && <p className="mt-2 text-lg font-medium">{message}</p>}

      {/* Botón Next / Show me the results */}
      <button
        onClick={handleNext}
        className={`mt-4 px-6 py-2 text-white font-bold rounded-md ${
          currentQuestionIndex === questions.length - 1
            ? "bg-purple-500 hover:bg-purple-600" // Última pregunta: Morado
            : "bg-green-500 hover:bg-green-600" // Preguntas anteriores: Verde
        }`}
      >
        {currentQuestionIndex === questions.length - 1 ? "Show me the results" : "Next"}
      </button>
    </div>

    </section>
    
  );
};

export default Quiz;
