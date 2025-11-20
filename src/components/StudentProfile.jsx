import React, { useState, useEffect } from 'react';
import { getResults, updateAvatar, getAvatar, updateUser } from '../utils/storage';

const AVATARS = [
    '🧑‍💻', '🦸', '🦹', '🤖', '👽', '👾', '👻', '🐯', '🦁', '🐺', '🦊', '🐼'
];

const StudentProfile = ({ user, onBack }) => {
    const [stats, setStats] = useState({
        totalScore: 0,
        missionsCompleted: 0,
        sRanks: 0,
        averageScore: 0
    });
    const [currentAvatar, setCurrentAvatar] = useState('🧑‍💻');
    const [loading, setLoading] = useState(true);

    // Edit Mode State
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        name: user.name,
        username: user.username,
        password: user.password || ''
    });
    const [editMessage, setEditMessage] = useState('');

    useEffect(() => {
        const loadProfile = async () => {
            // Load avatar
            const savedAvatar = getAvatar(user.username);
            setCurrentAvatar(savedAvatar);

            // Load stats
            const allResults = await getResults();
            const myResults = allResults.filter(r => r.student_name === user.name);

            if (myResults.length > 0) {
                const totalScore = myResults.reduce((acc, curr) => acc + curr.score, 0);
                const sRanks = myResults.filter(r => r.rank === 'S').length;
                const average = Math.round(totalScore / myResults.length);

                setStats({
                    totalScore,
                    missionsCompleted: myResults.length,
                    sRanks,
                    averageScore: average
                });
            }
            setLoading(false);
        };
        loadProfile();
    }, [user]);

    const handleAvatarSelect = async (avatar) => {
        setCurrentAvatar(avatar);
        await updateAvatar(user.username, avatar);
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setEditMessage('');

        if (!editForm.name || !editForm.username || !editForm.password) {
            setEditMessage('All fields are required.');
            return;
        }

        const res = await updateUser(user.username, {
            name: editForm.name,
            username: editForm.username,
            password: editForm.password
        });

        if (res.success) {
            setEditMessage('Profile updated successfully! Please re-login if username changed.');
            setIsEditing(false);
        } else {
            setEditMessage('Error: ' + res.message);
        }
    };

    return (
        <div className="dashboard-panel">
            <div className="panel-header">
                <span className="status-blink">👤 AGENT PROFILE</span>
                <span className="panel-id">ID: {user.username.toUpperCase()}</span>
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

            <div className="admin-content" style={{ padding: '30px', display: 'flex', gap: '40px' }}>
                <div className="profile-sidebar" style={{ width: '300px', borderRight: '1px solid #333', paddingRight: '30px' }}>
                    <div className="avatar-preview" style={{
                        width: '150px',
                        height: '150px',
                        border: '2px solid var(--primary)',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '5rem',
                        margin: '0 auto 20px auto',
                        background: 'rgba(0, 255, 0, 0.05)',
                        boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)'
                    }}>
                        {currentAvatar}
                    </div>
                    <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '5px' }}>{user.name}</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>LEVEL {Math.floor(stats.totalScore / 100) + 1} AGENT</p>

                    <div className="avatar-selector" style={{ marginTop: '30px' }}>
                        <h4 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>CHANGE AVATAR</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                            {AVATARS.map(avatar => (
                                <button
                                    key={avatar}
                                    onClick={() => handleAvatarSelect(avatar)}
                                    style={{
                                        background: currentAvatar === avatar ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '5px',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {avatar}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="profile-stats" style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--primary-dim)', paddingBottom: '10px', marginBottom: '20px' }}>
                        <h3 style={{ margin: 0 }}>PERFORMANCE METRICS</h3>
                        <button
                            className="cyber-btn small"
                            onClick={() => setIsEditing(!isEditing)}
                            style={{ fontSize: '0.8rem', padding: '5px 10px' }}
                        >
                            {isEditing ? 'CANCEL EDIT' : 'EDIT PROFILE'}
                        </button>
                    </div>

                    {isEditing ? (
                        <div className="edit-profile-form" style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', border: '1px solid var(--secondary)', marginBottom: '20px' }}>
                            <h4 style={{ color: 'var(--secondary)', marginBottom: '15px' }}>UPDATE CREDENTIALS</h4>
                            <form onSubmit={handleUpdateProfile}>
                                <div className="form-group">
                                    <label>FULL NAME</label>
                                    <input
                                        type="text"
                                        className="cyber-input"
                                        value={editForm.name}
                                        onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>USERNAME</label>
                                    <input
                                        type="text"
                                        className="cyber-input"
                                        value={editForm.username}
                                        onChange={e => setEditForm({ ...editForm, username: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>NEW PASSWORD</label>
                                    <input
                                        type="password"
                                        className="cyber-input"
                                        placeholder="Enter new password"
                                        value={editForm.password}
                                        onChange={e => setEditForm({ ...editForm, password: e.target.value })}
                                    />
                                </div>
                                {editMessage && <div style={{ color: editMessage.includes('Error') ? 'var(--accent)' : 'var(--primary)', marginBottom: '10px' }}>{editMessage}</div>}
                                <button type="submit" className="cyber-btn full-width">SAVE CHANGES</button>
                            </form>
                        </div>
                    ) : (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
                                <div className="stat-card" style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', border: '1px solid #333' }}>
                                    <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>TOTAL SCORE</div>
                                    <div style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>{stats.totalScore}</div>
                                </div>
                                <div className="stat-card" style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', border: '1px solid #333' }}>
                                    <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>MISSIONS COMPLETED</div>
                                    <div style={{ fontSize: '2.5rem', color: '#fff' }}>{stats.missionsCompleted}</div>
                                </div>
                                <div className="stat-card" style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', border: '1px solid #333' }}>
                                    <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>S-RANK MISSIONS</div>
                                    <div style={{ fontSize: '2.5rem', color: 'gold' }}>{stats.sRanks}</div>
                                </div>
                                <div className="stat-card" style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', border: '1px solid #333' }}>
                                    <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>AVG. ACCURACY</div>
                                    <div style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>{stats.averageScore}%</div>
                                </div>
                            </div>

                            <h3 style={{ borderBottom: '1px solid var(--primary-dim)', paddingBottom: '10px', marginBottom: '20px' }}>ACHIEVEMENTS</h3>
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                {stats.missionsCompleted > 0 ? (
                                    <div title="Completed First Mission" style={{ width: '60px', height: '60px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', borderRadius: '50%', border: '2px solid gold' }}>🏁</div>
                                ) : (
                                    <div style={{ width: '60px', height: '60px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', borderRadius: '50%', border: '2px dashed #444', opacity: 0.5 }}>🔒</div>
                                )}

                                {stats.sRanks > 0 ? (
                                    <div title="Achieved S-Rank" style={{ width: '60px', height: '60px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', borderRadius: '50%', border: '2px solid gold' }}>🏆</div>
                                ) : (
                                    <div style={{ width: '60px', height: '60px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', borderRadius: '50%', border: '2px dashed #444', opacity: 0.5 }}>🔒</div>
                                )}

                                {stats.totalScore >= 1000 ? (
                                    <div title="1000+ Score Club" style={{ width: '60px', height: '60px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', borderRadius: '50%', border: '2px solid gold' }}>💎</div>
                                ) : (
                                    <div style={{ width: '60px', height: '60px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', borderRadius: '50%', border: '2px dashed #444', opacity: 0.5 }}>🔒</div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
