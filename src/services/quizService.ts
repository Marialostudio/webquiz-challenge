import { Question } from "../types/quizTypes";

const API_URL = "https://quizapi.io/api/v1/questions";
const API_KEY = "9h9hj50PzMwiSQpjmzGwAPqV31ENsPU6xseRVx7A"; // 🔑 Reemplázala con tu API Key

export const fetchQuizQuestions = async (): Promise<Question[]> => {
    try {
      const response = await fetch(
        `${API_URL}?tags=JavaScript&difficulty=Easy&limit=5`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }
  
      const data: Question[] = await response.json();
      console.log("📌 Preguntas obtenidas:", data);
      return data;
    } catch (error) {
      console.error("Error al obtener preguntas:", error);
      return [];
    }
  };