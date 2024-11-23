// src/pages/Test.js
// import React from 'react';

// const Test = () => {
//   return (
//     <div>
//       <h2>Mental Health Assessment Test</h2>
//       <p>Complete this test to receive an assessment of your mental health.</p>
//     </div>
//   );
// };

// export default Test;




import React, { useState, useEffect } from "react";
import "../style/Test.css";
import "bootstrap/dist/css/bootstrap.min.css";

const questions = [
  {
    questionText:
      "Question 1: When faced with a challenge, how confident do you feel about overcoming it?",
    options: [
      { optionText: "1. Very confident", points: 5 },
      { optionText: "2. Somewhat confident", points: 3 },
      { optionText: "3. Doubtful", points: 1 },
      { optionText: "4. Not confident", points: 0 },
    ],
  },
  {
    questionText: "Question 2: Which statement resonates with you the most?",
    options: [
      { optionText: "1. Life is full of possibilities.", points: 3 },
      { optionText: "2. Life is unpredictable.", points: 2 },
      { optionText: "3. Life is a struggle.", points: 1 },
      { optionText: "4. Life is beautiful.", points: 4 },
    ],
  },
  {
    questionText:
      "Question 3: How often do you find it difficult to fall asleep due to racing thoughts?",
    options: [
      { optionText: "1. Rarely", points: 1 },
      { optionText: "2. Occasionally", points: 2 },
      { optionText: "3. Often", points: 3 },
      { optionText: "4. Constantly", points: 4 },
    ],
  },
];

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(1800); // 30 minutes timer
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(questions.length).fill(false)
  );

  useEffect(() => {
    if (timer > 0 && !isTestFinished) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, isTestFinished]);

  const handleNext = () => {
    if (selectedOption !== null) {
      setTotalPoints(totalPoints + selectedOption.points);
      setAnsweredQuestions((prev) => {
        const updated = [...prev];
        updated[currentQuestionIndex] = true;
        return updated;
      });
      setSelectedOption(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsTestFinished(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setTotalPoints(0);
    setTimer(1800);
    setIsTestFinished(false);
    setSelectedOption(null);
    setAnsweredQuestions(Array(questions.length).fill(false));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="test-container">
      <div className="test-header">
        <h2>Mental Health Assessment Test</h2>
        <p>Complete this test to receive an assessment of your mental health.</p>
      </div>
      {isTestFinished ? (
        <div className="test-result">
          <h3>Test Finished!</h3>
          <p>Your total score is: {totalPoints}</p>
          <p>Assessment Result:</p>
          <p>
            {totalPoints < 30
              ? "You may benefit from additional support and self-care."
              : totalPoints < 90
              ? "Your mental health seems to be in a moderate state."
              : "You appear to be in a strong mental health state!"}
          </p>
          <button className="test-reset-button" onClick={resetTest}>
            Take the test again
          </button>
        </div>
      ) : (
        <div className="test-content">
          <p className="test-timer">Time Remaining: {formatTime(timer)}</p>
          <div className="test-progress">
            {questions.map((_, index) => (
              <span
                key={index}
                className={`progress-indicator ${
                  answeredQuestions[index] ? "completed" : "pending"
                }`}
              >
                ●
              </span>
            ))}
          </div>
          <div className="test-question">
            <h3>{questions[currentQuestionIndex].questionText}</h3>
            <div className="test-options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.optionText}
                </button>
              ))}
            </div>
          </div>
          <div className="test-navigation">
            <button
              className="nav-button"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button className="nav-button" onClick={handleNext}>
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
