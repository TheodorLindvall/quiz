import { useState } from 'react';

const Admin = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const addQuestion = () => {
    setQuestions([...questions, { question: newQuestion, options: [], correctAnswer: '' }]);
    setNewQuestion('');
  };

  const updateQuestion = (index, updatedQuestion) => {
    const updatedQuestions = questions.map((q, i) => (i === index ? updatedQuestion : q));
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="New question"
      />
      <button onClick={addQuestion}>Add Question</button>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <input
              type="text"
              value={q.question}
              onChange={(e) => updateQuestion(index, { ...q, question: e.target.value })}
            />
            <button onClick={() => deleteQuestion(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
