import React from "react";
import { HomeProps } from "../types/quizTypes";
import { Button } from "@/components/ui/button"

const Home: React.FC<Omit<HomeProps, "setQuestions">> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">Quiz Challenge</h1>
      <Button
        onClick={() => {
            console.log("✅ Botón clickeado, iniciando quiz...");
            onStart();
        }}
        className="text-lg text-blue-500 hover:underline"
      >
        Let's start the quiz →
      </Button>
    </div>
  );
};

export default Home;
