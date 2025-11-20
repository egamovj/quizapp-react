import React, { useState, useEffect } from 'react';
import { getResults, getUsers, logoutUser } from '../utils/storage';

const AdminDashboard = ({ onLogout }) => {
    const [results, setResults] = useState([]);
    const [students, setStudents] = useState([]);
    const [activeTab, setActiveTab] = useState('reports');
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const resultsData = await getResults();
            setResults(resultsData);
            const usersData = await getUsers();
            setStudents(usersData);
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        logoutUser();
        onLogout();
    };

    const getStudentStats = (studentName) => {
        const studentResults = results.filter(r => r.student_name === studentName);
        const totalMissions = studentResults.length;
        const totalScore = studentResults.reduce((acc, curr) => acc + curr.score, 0);
        const totalPossible = studentResults.reduce((acc, curr) => acc + curr.total, 0);

        // "Completed Correctly" - assuming Rank B (60%) or higher is a "correct" completion / pass
        const passedMissions = studentResults.filter(r => {
            const percentage = (r.score / r.total) * 100;
            return percentage >= 60;
        }).length;

        return {
            totalMissions,
            totalScore,
            totalPossible,
            passedMissions,
            history: studentResults
        };
    };

    const renderReports = () => (
        <div className="results-table-container">
            <table className="cyber-table">
                <thead>
                    <tr>
                        <th>AGENT NAME</th>
                        <th>SCORE</th>
                        <th>RANK</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {results.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>NO DATA FOUND</td>
                        </tr>
                    ) : (
                        results.map((res, index) => (
                            <tr key={index}>
                                <td>{res.student_name}</td>
                                <td className="highlight">{res.score}/{res.total}</td>
                                <td>
                                    <span className={`rank-tag rank-${res.rank}`}>{res.rank}</span>
                                </td>
                                <td>{new Date(res.created_at).toLocaleString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );

    const renderAgents = () => {
        if (selectedStudent) {
            const stats = getStudentStats(selectedStudent.name);
            return (
                <div className="student-profile">
                    <button className="cyber-btn small" onClick={() => setSelectedStudent(null)} style={{ marginBottom: '20px' }}>
                        ← BACK TO AGENTS
                    </button>

                    <div className="profile-header">
                        <h2>AGENT: <span className="highlight">{selectedStudent.name}</span></h2>
                        <span className="panel-id">ID: {selectedStudent.username}</span>
                    </div>

                    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                        <div className="stat-card cyber-border" style={{ padding: '20px', background: 'rgba(0,0,0,0.3)' }}>
                            <div className="stat-label" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>TOTAL MISSIONS</div>
                            <div className="stat-value" style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>{stats.totalMissions}</div>
                        </div>
                        <div className="stat-card cyber-border" style={{ padding: '20px', background: 'rgba(0,0,0,0.3)' }}>
                            <div className="stat-label" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>PASSED MISSIONS</div>
                            <div className="stat-value" style={{ fontSize: '2rem', color: '#00ff9d', fontWeight: 'bold' }}>{stats.passedMissions}</div>
                            <div className="stat-sub" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>(Score &ge; 60%)</div>
                        </div>
                        <div className="stat-card cyber-border" style={{ padding: '20px', background: 'rgba(0,0,0,0.3)' }}>
                            <div className="stat-label" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>ACCURACY</div>
                            <div className="stat-value" style={{ fontSize: '2rem', color: 'var(--secondary)', fontWeight: 'bold' }}>
                                {stats.totalPossible > 0 ? Math.round((stats.totalScore / stats.totalPossible) * 100) : 0}%
                            </div>
                        </div>
                    </div>

                    <h3>MISSION HISTORY</h3>
                    <div className="results-table-container">
                        <table className="cyber-table">
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>SCORE</th>
                                    <th>RANK</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.history.length === 0 ? (
                                    <tr><td colSpan="3">NO MISSIONS RECORDED</td></tr>
                                ) : (
                                    stats.history.map((res, index) => (
                                        <tr key={index}>
                                            <td>{new Date(res.created_at).toLocaleString()}</td>
                                            <td className="highlight">{res.score}/{res.total}</td>
                                            <td><span className={`rank-tag rank-${res.rank}`}>{res.rank}</span></td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        return (
            <div className="results-table-container">
                <table className="cyber-table">
                    <thead>
                        <tr>
                            <th>AGENT NAME</th>
                            <th>USERNAME</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ? (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center' }}>NO AGENTS FOUND</td>
                            </tr>
                        ) : (
                            students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.username}</td>
                                    <td>
                                        <button
                                            className="cyber-btn small"
                                            onClick={() => setSelectedStudent(student)}
                                        >
                                            VIEW PROFILE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="dashboard-panel admin-panel">
            <div className="panel-header">
                <span className="status-blink">🛡️ ADMIN COMMAND</span>
                <span className="panel-id">OVERWATCH_MODE</span>
                <button className="cyber-btn small" onClick={handleLogout}>LOGOUT</button>
            </div>

            <div className="admin-content">
                <div className="admin-tabs" style={{ marginBottom: '20px', borderBottom: '1px solid var(--primary-dim)' }}>
                    <button
                        className={`cyber-btn ${activeTab === 'reports' ? '' : 'outline'}`}
                        style={{ marginRight: '10px', borderBottom: 'none', borderRadius: '4px 4px 0 0' }}
                        onClick={() => { setActiveTab('reports'); setSelectedStudent(null); }}
                    >
                        MISSION REPORTS
                    </button>
                    <button
                        className={`cyber-btn ${activeTab === 'agents' ? '' : 'outline'}`}
                        style={{ borderBottom: 'none', borderRadius: '4px 4px 0 0' }}
                        onClick={() => setActiveTab('agents')}
                    >
                        AGENTS ROSTER
                    </button>
                </div>

                {activeTab === 'reports' ? renderReports() : renderAgents()}
            </div>
        </div>
    );
};

export default AdminDashboard;
