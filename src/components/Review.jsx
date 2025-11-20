import React, { useState, useEffect } from 'react';
import { getResults } from '../utils/storage';
import { questions as allQuestions } from '../data/questions';

const Review = ({ user, onBack, onStartReview }) => {
    const [wrongQuestions, setWrongQuestions] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWrongAnswers = async () => {
            const allResults = await getResults();
            const myResults = allResults.filter(r => r.student_name === user.name);

            // Collect all questions from user's history
            const wrongQs = new Map();

            myResults.forEach(result => {
                // Parse the answers if they exist
                if (result.answers) {
                    try {
                        const answers = typeof result.answers === 'string'
                            ? JSON.parse(result.answers)
                            : result.answers;

                        answers.forEach(ans => {
                            if (!ans.isCorrect) {
                                const key = ans.question;
                                if (!wrongQs.has(key)) {
                                    wrongQs.set(key, {
                                        question: ans.question,
                                        attempts: 0,
                                        lastAttempt: result.created_at
                                    });
                                }
                                wrongQs.get(key).attempts += 1;
                                wrongQs.get(key).lastAttempt = result.created_at;
                            }
                        });
                    } catch (e) {
                        console.error('Error parsing answers:', e);
                    }
                }
            });

            // Match with actual question data
            const wrongList = Array.from(wrongQs.values()).map(wq => {
                // Find the question in our question bank
                let foundQuestion = null;
                let category = 'unknown';

                ['html', 'css', 'js'].forEach(cat => {
                    const found = allQuestions[cat]?.find(q => q.question === wq.question);
                    if (found) {
                        foundQuestion = found;
                        category = cat;
                    }
                });

                return {
                    ...wq,
                    category,
                    questionData: foundQuestion
                };
            }).filter(q => q.questionData);

            setWrongQuestions(wrongList);
            setLoading(false);
        };

        loadWrongAnswers();
    }, [user]);

    const filteredQuestions = filter === 'all'
        ? wrongQuestions
        : wrongQuestions.filter(q => q.category === filter);

    const handlePractice = () => {
        const questionsToReview = filteredQuestions.map(wq => ({
            ...wq.questionData,
            category: wq.category
        }));
        onStartReview(questionsToReview);
    };

    const getCategoryColor = (cat) => {
        switch (cat) {
            case 'html': return 'var(--primary)';
            case 'css': return 'var(--secondary)';
            case 'js': return 'gold';
            default: return '#888';
        }
    };

    return (
        <div className="dashboard-panel">
            <div className="panel-header">
                <span className="status-blink">🔍 REVIEW MODE</span>
                <span className="panel-id">WEAK_AREAS_ANALYSIS</span>
                <button
                    onClick={onBack}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-dim)',
                        cursor: 'pointer',
                        marginLeft: 'auto',
                        fontSize: '0.8rem'
                    }}
                >
                    [X] CLOSE
                </button>
            </div>

            <div className="admin-content" style={{ padding: '30px' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '60px', color: 'var(--primary)' }}>
                        ANALYZING DATA...
                    </div>
                ) : (
                    <>
                        {/* Filter Tabs */}
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                            <button
                                onClick={() => setFilter('all')}
                                className="cyber-btn small"
                                style={{
                                    background: filter === 'all' ? 'var(--primary)' : 'transparent',
                                    color: filter === 'all' ? '#000' : '#fff',
                                    opacity: filter === 'all' ? 1 : 0.6
                                }}
                            >
                                ALL ({wrongQuestions.length})
                            </button>
                            <button
                                onClick={() => setFilter('html')}
                                className="cyber-btn small"
                                style={{
                                    borderColor: 'var(--primary)',
                                    background: filter === 'html' ? 'var(--primary)' : 'transparent',
                                    color: filter === 'html' ? '#000' : 'var(--primary)',
                                    opacity: filter === 'html' ? 1 : 0.6
                                }}
                            >
                                HTML ({wrongQuestions.filter(q => q.category === 'html').length})
                            </button>
                            <button
                                onClick={() => setFilter('css')}
                                className="cyber-btn small"
                                style={{
                                    borderColor: 'var(--secondary)',
                                    background: filter === 'css' ? 'var(--secondary)' : 'transparent',
                                    color: filter === 'css' ? '#000' : 'var(--secondary)',
                                    opacity: filter === 'css' ? 1 : 0.6
                                }}
                            >
                                CSS ({wrongQuestions.filter(q => q.category === 'css').length})
                            </button>
                            <button
                                onClick={() => setFilter('js')}
                                className="cyber-btn small"
                                style={{
                                    borderColor: 'gold',
                                    background: filter === 'js' ? 'gold' : 'transparent',
                                    color: filter === 'js' ? '#000' : 'gold',
                                    opacity: filter === 'js' ? 1 : 0.6
                                }}
                            >
                                JS ({wrongQuestions.filter(q => q.category === 'js').length})
                            </button>
                        </div>

                        {filteredQuestions.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-dim)' }}>
                                <h2>🎉 NO WEAK AREAS!</h2>
                                <p>You haven't missed any questions{filter !== 'all' ? ` in ${filter.toUpperCase()}` : ''} yet!</p>
                            </div>
                        ) : (
                            <>
                                {/* Practice Button */}
                                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ color: 'var(--accent)', margin: 0 }}>
                                        {filteredQuestions.length} Question{filteredQuestions.length > 1 ? 's' : ''} to Review
                                    </h3>
                                    <button
                                        onClick={handlePractice}
                                        className="cyber-btn"
                                        style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                                    >
                                        ⚡ START PRACTICE
                                    </button>
                                </div>

                                {/* Questions List */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {filteredQuestions.map((wq, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                background: 'rgba(0,0,0,0.3)',
                                                border: `1px solid ${getCategoryColor(wq.category)}`,
                                                padding: '20px',
                                                borderRadius: '5px',
                                                borderLeft: `4px solid ${getCategoryColor(wq.category)}`
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                                                <div>
                                                    <span style={{
                                                        color: getCategoryColor(wq.category),
                                                        fontSize: '0.8rem',
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase'
                                                    }}>
                                                        {wq.category}
                                                    </span>
                                                    <h4 style={{ margin: '5px 0', color: '#fff' }}>{wq.question}</h4>
                                                </div>
                                                <span style={{
                                                    background: 'rgba(255,0,0,0.2)',
                                                    color: 'red',
                                                    padding: '4px 8px',
                                                    borderRadius: '3px',
                                                    fontSize: '0.75rem',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    ❌ {wq.attempts}x
                                                </span>
                                            </div>
                                            <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                                                Last mistake: {new Date(wq.lastAttempt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Review;
