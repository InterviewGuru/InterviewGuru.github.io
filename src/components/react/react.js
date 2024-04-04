import React, { useState, useEffect } from 'react';

function ReactInterviewQuestions() {
  const [questions, setQuestions] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState({
    easy: false,
    medium: false,
    hard: false
  });

  useEffect(() => {
    fetch('data/react.json') // Assuming questions.json is in the public folder
      .then(response => response.json())
      .then(data => setQuestions(data.questions))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleDifficultyChange = (event) => {
    const { name, checked } = event.target;
    setSelectedDifficulty(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="accordion-item">
        <button className={`accordion-button ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
          {question}
        </button>
        {isOpen && <div className="accordion-content">{answer}</div>}
      </div>
    );
  };

  return (
    <div>
      <h1>React Interview Questions</h1>
      <div>
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
          <AccordionItem key={index} question={question.question} answer={question.answer} />
        ))}
      </div>
    </div>
  );
}

export default ReactInterviewQuestions;
