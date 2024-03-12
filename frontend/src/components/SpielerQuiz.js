import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { questions } from '../assets/Questions';
import '../css/SpielerQuiz.css';

function SpielerQuiz() {
  let [index, setIndex] = useState(0);
  let [selectedAnswers, setSelectedAnswers] = useState(Array.from({ length: questions.length }, () => []));
  let [showResults, setShowResults] = useState(false);
  let question = questions[index];

  const selectAnswer = (ans) => {
    let currentSelections = [...selectedAnswers[index]];
    if (currentSelections.includes(ans)) {
      currentSelections = currentSelections.filter(item => item !== ans); // Remove selection
    } else {
      currentSelections.push(ans); // Add selection
    }
    
    let newAnswers = [...selectedAnswers];
    newAnswers[index] = currentSelections;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setShowResults(true); // Show results after the last question
    }
  };

  if (showResults) {
    // Logic to determine and display the user's playing style
    return (
      <div>
        <Navbar />
        <div className="results-section">
            <h1>Du spielst wie:</h1>
            <ul>
                {selectedAnswers.map((answerSet, questionIndex) => (
                    <li key={questionIndex}>
                        Frage {questionIndex + 1}: {answerSet.join(", ")}
                    </li>
                ))}
            </ul>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='quiz-section'>
        <div className='quiz-content'>
          <div className='quiz-title'>
            <h1>Wie spielst du?</h1>
          </div>
          <div className='quiz-fragen'>
            <h2>{index + 1}. {question.question}</h2>
            <ul>
              {Object.keys(question).filter(key => key.startsWith("option")).map((optionKey, idx) => (
                <li key={idx} 
                    onClick={() => selectAnswer(question[optionKey])}
                    className={selectedAnswers[index].includes(question[optionKey]) ? "selected" : ""}
                >
                    {question[optionKey]}
                </li>
              ))}
            </ul>
            <button onClick={nextQuestion}>weiter</button>
            <div className='nr-frage'>Frage {index + 1} von {questions.length}</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default SpielerQuiz;
