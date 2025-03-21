import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../types/quizTypes";
import { QuizProps } from "../types/quizTypes";
import logoForge from "/src/assets/logo-forge-grey.png"; // Importación del logo

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
      setMessage("🚀 Sorry! Time flies and your chance has gone 😔");
      setTimeExpired(true);
    } else {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleAnswerSelection = (key: string) => {
    if (!timeExpired) {
      setSelectedAnswer(key);
      setMessage("Ok, press the 'Next' button to dive into the next question 🤩");
    }
  };

  const handleNext = () => {
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
    <section className="w-full h-screen bg-[#C8D2DA] flex items-center justify-center px-[10%] md:px-[20%] relative">
      {/* Fondo con transparencia */}
      <div className="cover-background-quiz absolute inset-0 bg-cover bg-center opacity-70"></div>

      {/* Contenedor para el logo en la esquina superior derecha */}
      <div className="absolute top-6 right-6">
        <img src={logoForge} alt="Forge Logo" className="w-[100px] md:w-[120px] lg:w-[140px]" />
      </div>

      <div className="quiz-container p-6 max-w-lg mx-auto text-center relative z-10">
        {/* Número de la pregunta */}
        <h2 className="font-bebas-neue text-forge-blue text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-tight">
          Question {currentQuestionIndex + 1}/{questions.length}
        </h2>

        {/* Pregunta del quiz */}
        <h3 className="font-sora text-forge-blue text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-snug mt-2">
          {questions[currentQuestionIndex].question}
        </h3>

        {/* Opciones de respuesta */}
        <div className="flex flex-col gap-2 mt-8">
          {Object.entries(questions[currentQuestionIndex].answers)
            .filter(([_, answer]) => answer !== null)
            .map(([key, answer]) => (
              <button key={key}
              onClick={() => handleAnswerSelection(key)}
              disabled={timeExpired}
              className={`option-button ${selectedAnswer === key ? "selected" : ""} ${
                timeExpired ? "cursor-not-allowed opacity-50" : ""
              }`}>
                {answer}
              </button>
            
            ))}
        </div>

        {/* Temporizador y barra de progreso */}
        <p className="text-lg font-semibold text-forge-blue mt-4">{timeLeft} s</p>
        <div className="w-full bg-gray-200 h-2 rounded-full my-2">
  <div
    className="h-2 rounded-full transition-all"
    style={{ width: `${(timeLeft / 30) * 100}%`, backgroundColor: "#4242E0" }}
  ></div>
</div>

        {/* Mensaje dinámico */}
        {message && <p className="alert-message">{message}</p>}

        {/* Botón Next / Show me the results */}
        <button
  onClick={handleNext}
  className="mt-5 px-6 py-2 next-button"
>
  {currentQuestionIndex === questions.length - 1 ? "Show me the results" : "Next"}
</button>

      </div>
    </section>
  );
};

export default Quiz;
