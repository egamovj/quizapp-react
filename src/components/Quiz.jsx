import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { questions } from '../data/questions';

const Quiz = ({ onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectAnswer = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        const newAnswers = [...userAnswers, {
            questionId: currentQuestion.id,
            question: currentQuestion.question,
            selected: selectedAnswer,
            correct: currentQuestion.answer,
            explanation: currentQuestion.explanation,
            isCorrect: selectedAnswer === currentQuestion.answer
        }];

        setUserAnswers(newAnswers);

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedAnswer(null);
        } else {
            const finalScore = newAnswers.filter(a => a.isCorrect).length;
            onComplete(finalScore, questions.length, newAnswers);
        }
    };

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="dashboard-panel quiz-panel">
            <div className="panel-header">
                <span className="status-blink">🟢 SYSTEM ACTIVE</span>
                <span className="panel-id">SAVOL {currentQuestionIndex + 1}/{questions.length}</span>
            </div>

            <div className="split-layout">
                <div className="left-col">
                    <div className="question-display">
                        <span className="label">Savol:</span>
                        <h2>{currentQuestion.question}</h2>
                    </div>
                    <div className="system-integrity">
                        <label></label>
                        <div className="integrity-bar">
                            <div className="fill" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className="right-col">
                    <QuestionCard
                        question={currentQuestion}
                        selectedAnswer={selectedAnswer}
                        onSelectAnswer={handleSelectAnswer}
                    />
                </div>
            </div>

            <div className="panel-footer">
                <button
                    className="cyber-btn"
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                >
                    {currentQuestionIndex === questions.length - 1 ? "MA'LUMOTNI YUKLASH" : "KEYINGI SAVOL >>"}
                </button>
            </div>
        </div>
    );
};

export default Quiz;
