import React, { useState, useEffect } from 'react';
import { getResults } from '../utils/storage';

const Analytics = ({ user, onBack }) => {
    const [stats, setStats] = useState({
        total: 0,
        byCategory: { html: [], css: [], js: [] },
        recentActivity: [],
        averageScore: 0,
        bestStreak: 0,
        improvement: 0
    });

    useEffect(() => {
        const loadAnalytics = async () => {
            const allResults = await getResults();
            const myResults = allResults
                .filter(r => r.student_name === user.name)
                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

            if (myResults.length === 0) {
                setStats({ ...stats, total: 0 });
                return;
            }

            // Recent activity (last 10)
            const recent = myResults.slice(-10).reverse();

            // Calculate improvement (compare first 3 vs last 3 averages)
            let improvement = 0;
            if (myResults.length >= 6) {
                const firstThree = myResults.slice(0, 3);
                const lastThree = myResults.slice(-3);
                const firstAvg = firstThree.reduce((acc, r) => acc + (r.score / r.total) * 100, 0) / 3;
                const lastAvg = lastThree.reduce((acc, r) => acc + (r.score / r.total) * 100, 0) / 3;
                improvement = Math.round(lastAvg - firstAvg);
            }

            // Average score
            const avgScore = Math.round(
                myResults.reduce((acc, r) => acc + (r.score / r.total) * 100, 0) / myResults.length
            );

            setStats({
                total: myResults.length,
                byCategory: {
                    html: myResults.filter(r => r.category === 'html' || !r.category),
                    css: myResults.filter(r => r.category === 'css'),
                    js: myResults.filter(r => r.category === 'js')
                },
                recentActivity: recent,
                averageScore: avgScore,
                bestStreak: myResults.length,
                improvement
            });
        };

        loadAnalytics();
    }, [user]);

    const getCategoryAverage = (category) => {
        if (stats.byCategory[category].length === 0) return 0;
        return Math.round(
            stats.byCategory[category].reduce((acc, r) => acc + (r.score / r.total) * 100, 0) /
            stats.byCategory[category].length
        );
    };

    const getRankColor = (rank) => {
        switch (rank) {
            case 'S': return 'gold';
            case 'A': return 'var(--primary)';
            case 'B': return 'var(--secondary)';
            default: return '#888';
        }
    };

    return (
        <div className="dashboard-panel">
            <div className="panel-header">
                <span className="status-blink">📊 ANALYTICS ACCESS</span>
                <span className="panel-id">AGENT: {user.username.toUpperCase()}</span>
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

            <div className="admin-content" style={{ padding: '30px', overflowY: 'auto' }}>
                {stats.total === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-dim)' }}>
                        <h2>📭 NO DATA AVAILABLE</h2>
                        <p>Complete some missions to see your analytics!</p>
                    </div>
                ) : (
                    <>
                        {/* Key Metrics */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                            <div className="stat-card" style={{ background: 'rgba(0, 255, 0, 0.1)', padding: '20px', border: '1px solid var(--primary)', borderRadius: '8px' }}>
                                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginBottom: '5px' }}>MISSIONS COMPLETED</div>
                                <div style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>{stats.total}</div>
                            </div>
                            <div className="stat-card" style={{ background: 'rgba(0, 255, 255, 0.1)', padding: '20px', border: '1px solid var(--secondary)', borderRadius: '8px' }}>
                                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginBottom: '5px' }}>AVERAGE SCORE</div>
                                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', fontWeight: 'bold' }}>{stats.averageScore}%</div>
                            </div>
                            <div className="stat-card" style={{ background: stats.improvement >= 0 ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)', padding: '20px', border: `1px solid ${stats.improvement >= 0 ? 'var(--primary)' : 'red'}`, borderRadius: '8px' }}>
                                <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginBottom: '5px' }}>IMPROVEMENT</div>
                                <div style={{ fontSize: '2.5rem', color: stats.improvement >= 0 ? 'var(--primary)' : 'red', fontWeight: 'bold' }}>
                                    {stats.improvement > 0 ? '+' : ''}{stats.improvement}%
                                </div>
                            </div>
                        </div>

                        {/* Category Breakdown */}
                        <h3 style={{ borderBottom: '1px solid var(--primary-dim)', paddingBottom: '10px', marginBottom: '20px' }}>CATEGORY PERFORMANCE</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
                            {['html', 'css', 'js'].map(cat => {
                                const avg = getCategoryAverage(cat);
                                const count = stats.byCategory[cat].length;
                                return (
                                    <div key={cat} style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', border: '1px solid #333', borderRadius: '5px' }}>
                                        <h4 style={{
                                            color: cat === 'html' ? 'var(--primary)' : cat === 'css' ? 'var(--secondary)' : 'gold',
                                            margin: '0 0 10px 0'
                                        }}>
                                            {cat.toUpperCase()}
                                        </h4>
                                        <div style={{ marginBottom: '10px' }}>
                                            <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Attempts: {count}</div>
                                            <div style={{ color: '#fff', fontSize: '1.5rem' }}>{avg}%</div>
                                        </div>
                                        <div style={{ background: '#111', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                                            <div style={{
                                                width: `${avg}%`,
                                                height: '100%',
                                                background: cat === 'html' ? 'var(--primary)' : cat === 'css' ? 'var(--secondary)' : 'gold',
                                                transition: 'width 0.3s'
                                            }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Recent Activity */}
                        <h3 style={{ borderBottom: '1px solid var(--primary-dim)', paddingBottom: '10px', marginBottom: '20px' }}>RECENT ACTIVITY</h3>
                        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid #333', borderRadius: '5px', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: '#111' }}>
                                    <tr>
                                        <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-dim)', fontSize: '0.8rem' }}>DATE</th>
                                        <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-dim)', fontSize: '0.8rem' }}>SCORE</th>
                                        <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-dim)', fontSize: '0.8rem' }}>RANK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.recentActivity.map((result, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                                            <td style={{ padding: '12px', color: '#fff' }}>
                                                {new Date(result.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </td>
                                            <td style={{ padding: '12px', color: 'var(--primary)' }}>
                                                {result.score}/{result.total} ({Math.round((result.score / result.total) * 100)}%)
                                            </td>
                                            <td style={{ padding: '12px' }}>
                                                <span style={{
                                                    color: getRankColor(result.rank),
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem'
                                                }}>
                                                    {result.rank}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Analytics;
