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
      img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHRuejgyOWFtc3Ezdnh0a3U1bGJnYTM2YmI2ZGd5Mng4NGZlYzFrciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WJZdOtltegO76/giphy.gif",
    },
  ];

  const result = resultData.find((r) => correctAnswers === r.minScore) || resultData[0];

  return (
    <section className="w-full h-screen bg-[#4242E0] flex items-center justify-center px-[10%] md:px-[10%]">
      {/* Fondo con transparencia */}
      <div className="cover-background absolute inset-0 bg-cover bg-center opacity-70"></div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10 text-center md:text-left">
        
        <div className="backdrop-blur-xs bg-white/10 p-6 rounded-lg flex flex-col justify-center items-center h-full">
          <h4 className="font-bebas-neue text-forge-grey text-left text-2xl sm:text-3xl md:text-4xl">You have scored</h4>
          <h2 className="font-bebas-neue text-forge-grey text-center text-[80px] leading-[1] sm:text-[120px] md:text-[180px] lg:text-[220px] xl:text-[280px]"> {correctAnswers}/5</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <img src={result.img} alt="Result gif" className="w-full h-auto mb-4" />
          <p className="text-lg text-white">{result.message}</p>
          <button
            className="text-forge-grey text-xl underline transition-transform duration-300 hover:scale-105 !bg-transparent !border-none !shadow-none mt-8"
            onClick={() => navigate("/")}
          >
            Wanna Play Again?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;
