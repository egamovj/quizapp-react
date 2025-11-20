import React, { useState, useEffect } from 'react';
import { getLeaderboard } from '../utils/storage';

const Leaderboard = ({ onBack }) => {
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRankings = async () => {
            const data = await getLeaderboard();
            setRankings(data);
            setLoading(false);
        };
        fetchRankings();
    }, []);

    return (
        <div className="dashboard-panel">
            <div className="panel-header">
                <span className="status-blink">🏆 GLOBAL RANKINGS</span>
                <span className="panel-id">NET_TOP_100</span>
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

            <div className="admin-content" style={{ padding: '20px' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--primary)' }}>
                        SCANNING NETWORK...
                    </div>
                ) : (
                    <div className="results-table-container">
                        <table className="cyber-table">
                            <thead>
                                <tr>
                                    <th>RANK</th>
                                    <th>AGENT</th>
                                    <th>TOTAL SCORE</th>
                                    <th>MISSIONS</th>
                                    <th>S-RANKS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankings.map((agent, index) => (
                                    <tr key={index} style={{
                                        background: index === 0 ? 'rgba(255, 215, 0, 0.1)' :
                                            index === 1 ? 'rgba(192, 192, 192, 0.1)' :
                                                index === 2 ? 'rgba(205, 127, 50, 0.1)' : 'transparent'
                                    }}>
                                        <td style={{
                                            color: index === 0 ? 'gold' :
                                                index === 1 ? 'silver' :
                                                    index === 2 ? '#cd7f32' : 'inherit',
                                            fontWeight: index < 3 ? 'bold' : 'normal'
                                        }}>
                                            #{index + 1}
                                        </td>
                                        <td>{agent.name}</td>
                                        <td style={{ color: 'var(--primary)' }}>{agent.totalScore}</td>
                                        <td>{agent.missions}</td>
                                        <td style={{ color: 'gold' }}>{agent.sRank}</td>
                                    </tr>
                                ))}
                                {rankings.length === 0 && (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>NO DATA FOUND</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;
