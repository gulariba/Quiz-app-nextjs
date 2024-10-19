"use client";
import React, { useState } from "react";

// Frontend Development Quiz Data
const quizData = [
  {
    question: "Which type does TypeScript use to represent an absence of value?",
    options: ["null", "undefined", "void", "none"],
    answer: "void",
  },
  {
    question: "What does 'let' do in JavaScript?",
    options: ["Declares a variable", "Defines a constant", "Creates a function", "Declares a class"],
    answer: "Declares a variable",
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<heading>", "<h6>", "<h2>"],
    answer: "<h1>",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-style", "text-size", "font-weight"],
    answer: "font-size",
  },
  {
    question: "What is a component in React?",
    options: ["A function that returns JSX", "A type of variable", "A style sheet", "A DOM element"],
    answer: "A function that returns JSX",
  },
  {
    question: "Which method is used to update the state in a React component?",
    options: ["setState()", "updateState()", "changeState()", "modifyState()"],
    answer: "setState()",
  },
  {
    question: "What is the purpose of Next.js?",
    options: ["Server-side rendering", "Static site generation", "API routes", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which of the following is a valid CSS selector?",
    options: [".class", "#id", "element", "*", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "JavaScript eXtension", "JavaScript Xquery", "JavaScript eXpression"],
    answer: "JavaScript XML",
  },
  {
    question: "How can you create a component in React?",
    options: ["Function or Class", "HTML element", "CSS style", "JavaScript variable"],
    answer: "Function or Class",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Handle answer selection
  const handleAnswerClick = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true); // End of quiz
    }
  };

  // Reset quiz
  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "Arial" }}>
      <h1>Frontend Development Quiz</h1>

      {showResult ? (
        <div>
          <h2>Your Score: {score} / {quizData.length}</h2>
          <h3>Percentage: {(score / quizData.length) * 100}%</h3>
          <button onClick={handleReset} style={buttonStyle}>
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <h3>{quizData[currentQuestion].question}</h3>
          <div>
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                style={buttonStyle}
              >
                {option}
              </button>
            ))}
          </div>
          <p>Question {currentQuestion + 1} / {quizData.length}</p>
        </div>
      )}
    </div>
  );
};

// Button styling
const buttonStyle: React.CSSProperties = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default QuizApp;
