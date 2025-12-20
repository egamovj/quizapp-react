import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Result = ({ score, total, userAnswers, onRetry, onHome }) => {
    useEffect(() => {
        if (score > total / 2) {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#00ff9d', '#00d2ff', '#ff0055']
            });
        }
    }, [score, total]);

    const percentage = (score / total) * 100;
    let rank = 'C';
    if (percentage === 100) rank = 'S';
    else if (percentage >= 80) rank = 'A';
    else if (percentage >= 60) rank = 'B';

    return (
        <div className="dashboard-panel result-panel" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="scanline"></div>
            <div className="panel-header">
                <span className="status-blink">🔵 MISSION COMPLETE</span>
                <span className="panel-id">REPORT GENERATED</span>
            </div>

            <div className="report-grid">
                <div className="rank-col">
                    <div className="rank-badge">
                        <span className="rank-label">DARAJA</span>
                        <span className={`rank-value rank-${rank} glitch-text`} data-text={rank}>{rank}</span>
                    </div>
                    <div className="score-stat">
                        <span className="stat-label">NATIJA </span>
                        <span className="stat-num">{score}/{total}</span>
                    </div>
                </div>

                <div className="log-col">
                    <h3>MISSIYANING JURNALI</h3>
                    <div className="log-list">
                        {userAnswers.filter(ans => ans !== null).map((answer, index) => (
                            <div key={index} className={`log-entry ${answer.isCorrect ? 'success' : 'fail'}`}>
                                <div className="log-header">
                                    <span className="log-id">LOG_0{index + 1}</span>
                                    <span className="log-status">{answer.isCorrect ? 'SUCCESS' : 'FAILURE'}</span>
                                </div>
                                <div className="log-details">
                                    <p>Q: {answer.question}</p>
                                    {!answer.isCorrect && <p className="correction"> TASHQI MA'lumot: {answer.correct}</p>}
                                    <p className="note"> Qo'shimcha ma'lumot: {answer.correct}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="panel-footer">
                <button className="cyber-btn" onClick={onRetry}>MISSIYANI QAYTA BOSHLASH</button>
                <button className="cyber-btn" onClick={onHome} style={{ marginLeft: '20px', background: 'var(--secondary)' }}>MENUGA QAYTISH</button>
            </div>
        </div>
    );
};

export default Result;
