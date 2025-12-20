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
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        setStartTime(Date.now());
    }, []);

    useEffect(() => {
        setCurrentQuestion(0);
        setAnswers(new Array(questions.length).fill(null));
        setTimeLeft(15);
        setShowFeedback(false);
        setSelectedOption(null);
    }, [category, questions.length]);

    // Sync state when navigating
    useEffect(() => {
        const previousAnswer = answers[currentQuestion];
        if (previousAnswer) {
            setSelectedOption(previousAnswer.selected);
            setIsCorrect(previousAnswer.isCorrect);
        } else {
            setSelectedOption(null);
            setIsCorrect(null);
        }
        if (isSpeedrun && !showFeedback) setTimeLeft(15);
    }, [currentQuestion, answers]);

    useEffect(() => {
        if (!isSpeedrun || showFeedback) return;

        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            if (timeLeft <= 5) {
                // Time's running out
            }
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



        const newAnswer = {
            question: currentQ.question,
            selected: option,
            correct: currentQ.answer,
            isCorrect: correct
        };

        const newAnswers = [...answers];
        newAnswers[currentQuestion] = newAnswer;
        setAnswers(newAnswers);

        // Delay for feedback then auto-move to next if not last
        setTimeout(() => {
            setShowFeedback(false);
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
            }
        }, 800);
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setShowFeedback(false);
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion + 1 < questions.length) {
            setShowFeedback(false);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const finalizeQuiz = () => {

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - startTime) / 1000);

        // Calculate final score based on all answers (answered ones)
        // We filter out nulls to avoid crashes in Result component
        const answeredOnly = answers.filter(ans => ans !== null);
        const finalScore = answeredOnly.reduce((acc, ans) => (ans.isCorrect ? acc + 1 : acc), 0);
        onComplete(finalScore, questions.length, answeredOnly, timeTaken);
    };

    const progress = ((currentQuestion) / questions.length) * 100;
    const integrity = (timeLeft / 15) * 100;

    return (
        <div className="dashboard-panel quiz-panel">
            <div className="panel-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span className="status-blink">🟢 SYSTEM ACTIVE</span>
                    <span className="panel-id">PROTOCOL: {category ? category.toUpperCase() : 'UNKNOWN'}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {isSpeedrun && (
                        <span className="timer" style={{ color: timeLeft < 5 ? 'red' : 'var(--primary)' }}>
                            T-{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                        </span>
                    )}
                    <button
                        className="cyber-btn"
                        onClick={finalizeQuiz}
                        style={{
                            padding: '5px 15px',
                            fontSize: '0.8rem',
                            background: 'rgba(255, 0, 85, 0.2)',
                            borderColor: 'var(--accent)',
                            color: 'var(--accent)'
                        }}
                    >
                        [ FINISH MISSION ]
                    </button>
                </div>
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
                        showResult={false}
                    />

                    <div className="quiz-nav" style={{ display: 'flex', gap: '20px', marginTop: '30px', justifyContent: 'center' }}>
                        <button
                            className="cyber-btn small"
                            onClick={handlePrev}
                            disabled={currentQuestion === 0}
                            style={{ width: '120px' }}
                        >
                            &lt; PREV
                        </button>
                        <button
                            className="cyber-btn small"
                            onClick={handleNext}
                            disabled={currentQuestion === questions.length - 1}
                            style={{ width: '120px' }}
                        >
                            NEXT &gt;
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ height: '4px', background: '#333', width: '100%' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: 'var(--secondary)', transition: 'width 0.3s' }}></div>
            </div>
        </div>
    );
};

export default Quiz;
