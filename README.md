# Web Quiz Challenge

A fun and interactive quiz application built with React, TypeScript, and TailwindCSS. This project challenges users with multiple-choice questions and provides instant feedback.

## Features

- 🕹️ **Interactive Quiz Flow**: Users navigate through questions one by one.
- ⏳ **Timer**: Each question has a time limit of 30 seconds.
- 🎨 **Styled with TailwindCSS**: Modern and responsive design.
- 🔄 **State Management**: Efficient handling of quiz state and navigation.
- 🌐 **API-Driven Questions**: Fetches random questions from an external API.

## Demo

🚀 [Live Demo](https://webquiz-challenge-qcipxlq7r-marialostudios-projects.vercel.app)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/webquiz-challenge.git
cd webquiz-challenge
npm install
```

## API Configuration

This project uses the [QuizAPI](https://quizapi.io/) to fetch questions. You need an API key to run the project locally.

1. Sign up at [QuizAPI](https://quizapi.io/).
2. Get your **API Key**.
3. Create a `.env.local` file in the root of your project and add:

```sh
VITE_API_KEY=your_api_key_here
```

## Running the Project

Start the development server:

```sh
npm run dev
```

The project will be available at `http://localhost:5173`.

## Usage

1. Click **"Let's start the quiz"**.
2. Answer questions within the time limit.
3. Get feedback based on your score.
4. Try again to improve your score!

## Technologies Used

- ⚛️ React (with Hooks & State Management)
- 💨 TailwindCSS for styling
- 📜 TypeScript for type safety
- 🌍 QuizAPI for fetching questions
- 🚀 Vite for fast builds

## Folder Structure

```plaintext
/src
 ├── components    # Reusable components
 ├── pages         # Main pages (Home, Quiz, Results)
 ├── services      # API calls
 ├── types         # TypeScript types
 ├── App.tsx       # Main app component
 ├── main.tsx      # Entry point
```

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

