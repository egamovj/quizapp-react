import React, { useState, useEffect } from 'react';
import { getResults, logoutUser } from '../utils/storage';

const AdminDashboard = ({ onLogout }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const data = await getResults();
            setResults(data);
        };
        fetchResults();
    }, []);

    const handleLogout = () => {
        logoutUser();
        onLogout();
    };

    return (
        <div className="dashboard-panel admin-panel">
            <div className="panel-header">
                <span className="status-blink">🛡️ ADMIN COMMAND</span>
                <span className="panel-id">OVERWATCH_MODE</span>
                <button className="cyber-btn small" onClick={handleLogout}>LOGOUT</button>
            </div>

            <div className="admin-content">
                <h1>MISSION REPORTS</h1>

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
            </div>
        </div>
    );
};

export default AdminDashboard;
