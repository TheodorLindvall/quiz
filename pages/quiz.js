import { useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
  
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  };

  if (showResults) {
    return (
      <div>
        <h1>Your Score: {calculateScore()} / {questions.length}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      <div>
        <h2>{questions[currentQuestionIndex].question}</h2>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerSelect(option)}>
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default Quiz;
