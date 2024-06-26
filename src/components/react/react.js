import React, { useState, useEffect } from "react";
import QuestionsDisplay from "../template/quesations";

function ReactInterviewQuestions() {
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("React Interview Questions and Answers");
  const [selectedDifficulty, setSelectedDifficulty] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  useEffect(() => {
    document.title = title;
    fetch("data/react.json") // Assuming questions.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
        setTitle(data.title);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleDifficultyChange = (event) => {
    const { name, checked } = event.target;
    setSelectedDifficulty((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <>
      <QuestionsDisplay
        questions={questions}
        title={title}
        handleDifficultyChange={handleDifficultyChange}
        selectedDifficulty={selectedDifficulty}
      />
    </>
  );
}

export default ReactInterviewQuestions;
