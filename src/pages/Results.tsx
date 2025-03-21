import { useNavigate } from "react-router-dom";

type ResultData = {
  minScore: number;
  message: string;
  img: string;
};

type ResultsProps = {
  correctAnswers: number;
};

const Results = ({ correctAnswers }: ResultsProps) => {
  const navigate = useNavigate();

  const resultData: ResultData[] = [
    {
      minScore: 0,
      message: "Wow, wow, wow, wow my friend! We didn't expect that! Do you really want to try again?",
      img: "https://media0.giphy.com/media/vOkC6iBfa6allFkKrp/giphy.gif",
    },
    {
      minScore: 1,
      message: "This is absurde! You'd better go study.",
      img: "https://media2.giphy.com/media/J7YrkRpjD8F6FRHBaS/giphy.gif",
    },
    {
      minScore: 2,
      message: "Oh, it's okay if you want to try again...",
      img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW1mbXZoanFpMzh2Z2EwMzAxcDA4dGtzNTZnN3NpazhoaDY5Mm5wNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LpfHZJGR2NQC4/giphy.gif",
    },
    {
      minScore: 3,
      message: "Well... let's see if you have the guts.",
      img: "https://media1.giphy.com/media/d225UIh4ADNqdZc8LV/giphy.gif",
    },
    {
      minScore: 4,
      message: "Oh how tender",
      img: "https://media3.giphy.com/media/nsk9MeQXR5kSk2e5Wa/giphy.gif",
    },
    {
      minScore: 5,
      message: "Good work but, this is the easy level!",
      img: "https://media2.giphy.com/media/V9xDjY81pxtglB6KtT/giphy.gif",
    },
  ];

  const result = resultData.find((r) => correctAnswers === r.minScore) || resultData[0];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Correct answers: {correctAnswers} of 5</h2>
      <img src={result.img} alt="Result gif" className="w-64 h-64 mb-4" />
      <p className="text-lg mb-4">{result.message}</p>
      <button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        onClick={() => navigate("/")}
      >
        Try Again
      </button>
    </div>
  );
};

export default Results;
