import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';

const Quiz = ({ onComplete, questions, category, isSpeedrun }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [timeLeft, setTimeLeft] = useState(15);
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
        setTimeLeft(15);
        setShowFeedback(false);
        setSelectedOption(null);
    }, [category]);

    useEffect(() => {
        if (!isSpeedrun || showFeedback) return;

        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            handleAnswer(null);
        }
    }, [timeLeft, showFeedback, isSpeedrun]);

    const handleAnswer = (option) => {
        const currentQ = questions[currentQuestion];
        const correct = option === currentQ.answer;

        setSelectedOption(option);
        setIsCorrect(correct);
        setShowFeedback(true);

        if (correct) {
            setScore(score + 1);
        }

        const newAnswer = {
            question: currentQ.question,
            selected: option,
            correct: currentQ.answer,
            isCorrect: correct
        };

        const newAnswers = [...answers, newAnswer];
        setAnswers(newAnswers);

        // Delay for feedback
        setTimeout(() => {
            setShowFeedback(false);
            setSelectedOption(null);
            setIsCorrect(null);

            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                if (isSpeedrun) setTimeLeft(15);
            } else {
                onComplete(correct ? score + 1 : score, questions.length, newAnswers);
            }
        }, 2000);
    };

    const progress = ((currentQuestion) / questions.length) * 100;
    const integrity = (timeLeft / 15) * 100;

    return (
        <div className="dashboard-panel quiz-panel">
            <div className="panel-header">
                <span className="status-blink">🟢 SYSTEM ACTIVE</span>
                <span className="panel-id">PROTOCOL: {category ? category.toUpperCase() : 'UNKNOWN'}</span>
                {isSpeedrun && (
                    <span className="timer" style={{ color: timeLeft < 5 ? 'red' : 'var(--primary)' }}>
                        T-{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                    </span>
                )}
            </div>

            <div className="split-layout">
                <div className="left-col">
                    <div className="question-display">
                        <span className="label">DATA_PACKET_0{currentQuestion + 1}</span>
                        <h2>{questions[currentQuestion].question}</h2>
                    </div>

                    {isSpeedrun && (
                        <div className="system-integrity">
                            <label style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>SYSTEM INTEGRITY (TIME)</label>
                            <div className="integrity-bar">
                                <div className="fill" style={{ width: `${integrity}%`, background: timeLeft < 5 ? 'red' : 'var(--primary)' }}></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="right-col">
                    <QuestionCard
                        options={questions[currentQuestion].options}
                        onAnswer={handleAnswer}
                        disabled={showFeedback}
                        selectedOption={selectedOption}
                        correctAnswer={questions[currentQuestion].answer}
                        showResult={showFeedback}
                    />
                </div>
            </div>

            <div style={{ height: '4px', background: '#333', width: '100%' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: 'var(--secondary)', transition: 'width 0.3s' }}></div>
            </div>
        </div>
    );
};

export default Quiz;
