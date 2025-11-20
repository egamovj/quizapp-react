import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Auth from './components/Auth';
import AdminDashboard from './components/AdminDashboard';
import LandingPage from './components/LandingPage';
import Leaderboard from './components/Leaderboard';
import StudentProfile from './components/StudentProfile';
import StudyGuide from './components/StudyGuide';
import { getCurrentUser, logoutUser, saveResult } from './utils/storage';
import { questions } from './data/questions';

function App() {
  const [user, setUser] = useState(null);
  const [gameState, setGameState] = useState('welcome');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setGameState('welcome');
    setShowAuth(false);
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setGameState('welcome');
    setSelectedCategory(null);
    setShowAuth(false);
  };

  const startQuiz = (category) => {
    setSelectedCategory(category);
    setGameState('quiz');
    setScore(0);
    setUserAnswers([]);
  };

  const finishQuiz = (finalScore, total, answers) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setUserAnswers(answers);
    setGameState('result');

    // Calculate rank
    const percentage = (finalScore / total) * 100;
    let rank = 'C';
    if (percentage === 100) rank = 'S';
    else if (percentage >= 80) rank = 'A';
    else if (percentage >= 60) rank = 'B';

    // Save result if student
    if (user && user.role === 'student') {
      saveResult({
        studentName: user.name,
        score: finalScore,
        total: total,
        rank: rank
      });
    }
  };

  const goHome = () => {
    setGameState('welcome');
    setScore(0);
    setUserAnswers([]);
    setSelectedCategory(null);
  };

  if (!user) {
    if (showAuth) {
      return (
        <div className="App">
          <Auth
            onLogin={handleLogin}
            initialMode={authMode}
            onBack={() => setShowAuth(false)}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <LandingPage
          onLogin={() => { setAuthMode('login'); setShowAuth(true); }}
          onRegister={() => { setAuthMode('register'); setShowAuth(true); }}
        />
      </div>
    );
  }

  if (user.role === 'admin') {
    return (
      <div className="App">
        <AdminDashboard onLogout={handleLogout} />
      </div>
    );
  }

  return (
    <div className="App">
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 100 }}>
        <span style={{ marginRight: '10px', color: 'var(--primary)' }}>AGENT: {user.username}</span>
        <button className="cyber-btn small" onClick={handleLogout} style={{ padding: '5px 10px', fontSize: '0.8rem' }}>LOGOUT</button>
      </div>

      {gameState === 'welcome' && (
        <Welcome
          onStart={startQuiz}
          user={user}
          onLeaderboard={() => setGameState('leaderboard')}
          onProfile={() => setGameState('profile')}
          onStudy={() => setGameState('study')}
        />
      )}
      {gameState === 'quiz' && (
        <Quiz
          onComplete={finishQuiz}
          questions={questions[selectedCategory]}
          category={selectedCategory}
        />
      )}
      {gameState === 'result' && (
        <Result
          score={score}
          total={totalQuestions}
          userAnswers={userAnswers}
          onRetry={() => startQuiz(selectedCategory)}
          onHome={goHome}
        />
      )}
      {gameState === 'leaderboard' && (
        <Leaderboard onBack={goHome} />
      )}
      {gameState === 'profile' && (
        <StudentProfile user={user} onBack={goHome} />
      )}
      {gameState === 'study' && (
        <StudyGuide onBack={goHome} />
      )}
    </div>
  );
}

export default App;
