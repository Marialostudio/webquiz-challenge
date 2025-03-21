export interface HomeProps {
    onStart: () => void | Promise<void>;
  }
  
  export interface QuizProps {
    questions: Question[];
    setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  }
  
  export interface Question {
    id: number;
    question: string;
    description: string | null;
    answers: {
      answer_a: string | null;
      answer_b: string | null;
      answer_c: string | null;
      answer_d: string | null;
      answer_e: string | null;
      answer_f: string | null;
    };
    multiple_correct_answers: string; // "true" o "false"
    correct_answers: {
      answer_a_correct: string;
      answer_b_correct: string;
      answer_c_correct: string;
      answer_d_correct: string;
      answer_e_correct: string;
      answer_f_correct: string;
    };
    correct_answer: string | null; // Parece no estar en uso, pero lo dejamos por si acaso
    explanation: string | null;
    tip: string | null;
    tags: { name: string }[];
    category: string;
    difficulty: string;
  }
  