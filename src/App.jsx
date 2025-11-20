import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [gameState, setGameState] = useState('welcome');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = () => {
    setGameState('quiz');
    setScore(0);
    setUserAnswers([]);
  };

  const finishQuiz = (finalScore, total, answers) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setUserAnswers(answers);
    setGameState('result');
  };

  const goHome = () => {
    setGameState('welcome');
    setScore(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      {gameState === 'welcome' && <Welcome onStart={startQuiz} />}
      {gameState === 'quiz' && <Quiz onComplete={finishQuiz} />}
      {gameState === 'result' && (
        <Result
          score={score}
          total={totalQuestions}
          userAnswers={userAnswers}
          onRetry={startQuiz}
          onHome={goHome}
        />
      )}
    </div>
  );
}

export default App;
