import React, { useState } from 'react';

function QuestionsDisplay({ questions, title, handleDifficultyChange, selectedDifficulty }) {
    const AccordionItem = ({ syno, question, answer }) => {
      const [isOpen, setIsOpen] = useState(false);
  
      const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
  
      return (
        <div className="accordion-item">
          <button className={`accordion-button ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
            {syno + 1 + ')'} {question}
          </button>
          {isOpen && <div className="accordion-content">{answer}</div>}
        </div>
      );
    };
  
    return (
      <div className='main-content-wrapper'>
        <div className='main-header-title'><h1>{title}</h1></div>
        <div className='filter-questions'>
          <label>
            <input
              type="checkbox"
              name="easy"
              checked={selectedDifficulty.easy}
              onChange={handleDifficultyChange}
            />
            Easy
          </label>
          <label>
            <input
              type="checkbox"
              name="medium"
              checked={selectedDifficulty.medium}
              onChange={handleDifficultyChange}
            />
            Medium
          </label>
          <label>
            <input
              type="checkbox"
              name="hard"
              checked={selectedDifficulty.hard}
              onChange={handleDifficultyChange}
            />
            Hard
          </label>
        </div>
        <div className="accordion">
          {questions.filter(question => {
            if (selectedDifficulty.easy && question.difficulty === 'easy') {
              return true;
            }
            if (selectedDifficulty.medium && question.difficulty === 'medium') {
              return true;
            }
            if (selectedDifficulty.hard && question.difficulty === 'hard') {
              return true;
            }
            if (!selectedDifficulty.easy && !selectedDifficulty.medium && !selectedDifficulty.hard) {
              return true; // Show all questions when no difficulty is selected
            }
            return false;
          }).map((question, index) => (
            <AccordionItem key={index} syno={index} question={question.question} answer={question.answer} />
          ))}
        </div>
      </div>
    );
  }

  export default QuestionsDisplay;
  