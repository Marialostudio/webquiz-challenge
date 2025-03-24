import React from "react";
import { HomeProps } from "../types/quizTypes";
import { useNavigate } from "react-router-dom";
import logoForge from "/src/assets/logo-forge.png"; // ✅ Importación correcta de imagen

const Home: React.FC<Omit<HomeProps, "setQuestions">> = ({ onStart }) => {
  const navigate = useNavigate(); // ✅ Hook para navegación

  return (
    <section className="w-full h-screen bg-[#4242E0] flex items-center justify-center px-[10%] md:px-[20%]">
      {/* Fondo con transparencia */}
      <div className="cover-background absolute inset-0 bg-cover bg-center opacity-70"></div>

      <div className="w-full max-w-[1200px] text-end relative z-10">
        {/* Título */}
        <h1 className="font-bebas-neue text-forge-grey text-right text-[80px] leading-[1] sm:text-[120px] md:text-[180px] lg:text-[220px] xl:text-[280px]">
          Quizzler
        </h1>

        {/* Contenedor del texto "By:" y el logo */}
        <div className="flex justify-end items-start mb-10">
          <p className="text-sm sm:text-base text-forge-grey pr-4">By:</p>
          <img
            src={logoForge} // ✅ Uso de import para asegurar que la imagen cargue correctamente
            alt="Logo Forge"
            className="ml-2 w-[174px] md:w-[140px] sm:w-[100px] xs:w-[80px] h-auto max-w-[174px]"
          />
        </div>

        {/* Botón */}
        <button
          onClick={async () => {
            await onStart(); // ✅ Llama a onStart para obtener preguntas
            navigate("/quiz"); // ✅ Redirige al quiz
          }}
          className="text-forge-grey text-xl transition-transform duration-300 hover:scale-105 !bg-transparent !border-none !shadow-none"
        >
          Let's start the quiz →
        </button>
      </div>
    </section>
  );
};

export default Home;
