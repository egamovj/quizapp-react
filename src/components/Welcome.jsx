import React from 'react';
import { getAvatar } from '../utils/storage';

const Welcome = ({ onStart, user, onProfile, onLeaderboard, onStudy }) => {
    const avatar = user ? getAvatar(user.username) : '🧑‍💻';

    return (
        <div className="dashboard-panel welcome-panel">
            <div className="panel-header">
                <span className="status-blink">🔴 TOP SECRET</span>
                <span className="panel-id">ID: 7TH-GRADE-DEV</span>
            </div>

            <div className="mission-content">
                <div className="mission-brief">
                    <h1>MISSIYAMIZ: WEB MASTER DARAJASI</h1>
                    <p className="typewriter">MAQSAD: HTML va CSS da nazariy bilimlarni mustahkamlash</p>

                    <div className="mission-stats">
                        <div className="stat-box">
                            <label>QIYINLIK DARAJASI</label>
                            <div className="stat-bar"><div style={{ width: '60%' }}></div></div>
                        </div>
                        <div className="stat-box">
                            <label>MUKOFOTLAR</label>
                            <div className="stat-value">XP + SERTIFIKAT</div>
                        </div>
                    </div>
                </div>

                <div className="character-select">
                    <div className="avatar-frame">
                        <span className="avatar">{avatar}</span>
                    </div>
                    <p>AGENT: {user ? user.name.toUpperCase() : 'YOU'}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <button
                            onClick={onProfile}
                            className="cyber-btn small"
                            style={{ fontSize: '0.7rem', padding: '5px 10px', minWidth: 'auto' }}
                        >
                            PROFILE
                        </button>
                        <button
                            onClick={onLeaderboard}
                            className="cyber-btn small"
                            style={{ fontSize: '0.7rem', padding: '5px 10px', minWidth: 'auto', borderColor: 'gold', color: 'gold' }}
                        >
                            RANKINGS
                        </button>
                        <button
                            onClick={onStudy}
                            className="cyber-btn small"
                            style={{ fontSize: '0.7rem', padding: '5px 10px', minWidth: 'auto', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}
                        >
                            DATA BANK
                        </button>
                    </div>
                </div>
            </div>

            <div className="mission-actions" style={{ padding: '0 40px 40px 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <p className="label" style={{ color: 'var(--secondary)', margin: 0 }}>SELECT MISSION PROTOCOL:</p>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: 'var(--accent)' }}>
                        <input
                            type="checkbox"
                            onChange={(e) => onStart(null, e.target.checked)} // We'll handle the mode change differently
                            style={{ accentColor: 'var(--accent)' }}
                        />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>⚡ SPEEDRUN MODE (15s)</span>
                    </label>
                </div>

                <div className="category-buttons" style={{ display: 'flex', gap: '20px' }}>
                    <button className="cyber-btn" onClick={() => onStart('html')}>
                        HTML
                        <span className="btn-tag">STRUCTURE</span>
                    </button>
                    <button className="cyber-btn" onClick={() => onStart('css')} style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
                        CSS
                        <span className="btn-tag">STYLE</span>
                    </button>
                    <button className="cyber-btn" onClick={() => onStart('js')} style={{ borderColor: 'gold', color: 'gold' }}>
                        JS
                        <span className="btn-tag">LOGIC</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
