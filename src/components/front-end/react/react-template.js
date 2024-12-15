import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // VS Code dark theme
import { questionsData } from './data';

const ReactTemplate = () => {
  const { Title, List } = questionsData;
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const categoryList = [...new Set(questionsData["List"].map(item => item.Category))];

  const toggleFilter = (filterType, value) => {
    const currentFilters = filterType === 'Difficulty' ? selectedDifficulty : selectedCategory;
    const setFilters = filterType === 'Difficulty' ? setSelectedDifficulty : setSelectedCategory;

    if (currentFilters.includes(value)) {
      setFilters(currentFilters.filter(item => item !== value));
    } else {
      setFilters([...currentFilters, value]);
    }
  };


  const filteredData = questionsData["List"].filter(item => (
    (selectedDifficulty.length === 0 || selectedDifficulty.includes(item.Difficulty)) &&
    (selectedCategory.length === 0 || selectedCategory.includes(item.Category))
  ));

  return (
    <div className='main-content-wrapper'>
      <h1 className='main-header-title'>{Title } </h1>
      <div className='filter-questions'>
        {['Easy', 'Medium', 'Hard'].map(difficulty => (
          <label key={difficulty} >
            <input
              type="checkbox"
              value={difficulty}
              checked={selectedDifficulty.includes(difficulty)}
              onChange={() => toggleFilter('Difficulty', difficulty)}
            />
            {difficulty}
          </label>
        ))}
      </div>
      <div className='filter-questions'>
        {categoryList.map(category => (
          <label key={category} >
            <input
              type="checkbox"
              value={category}
              checked={selectedCategory.includes(category)}
              onChange={() => toggleFilter('Category', category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div className="c-accordion" style={{ marginTop: '20px' }}>
        {filteredData.map((item, index) => (
          <details key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
            <summary>{item.Question}</summary>
            <div className="answer">
              <h4>Answer:</h4>
              <ul>
                {item.Answer.map((ans, idx) => (
                  <li key={idx}>{ans}</li>
                ))}
              </ul>
            </div>
            {item.Code && (
              <div>
                <h4>Code:</h4>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {item.Code.join('\n')}
                </SyntaxHighlighter>
              </div>
            )}
          </details>
        ))}
      </div>
    </div>
  );
};

export default ReactTemplate;
