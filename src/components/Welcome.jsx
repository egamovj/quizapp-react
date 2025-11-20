import React from 'react';

const Welcome = ({ onStart }) => {
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
                        <span className="avatar">🧑‍</span>
                    </div>
                    <p>AGENT: YOU</p>
                </div>
            </div>

            <div className="mission-actions" style={{ padding: '0 40px 40px 40px' }}>
                <p className="label" style={{ color: 'var(--secondary)', marginBottom: '15px' }}>SELECT MISSION PROTOCOL:</p>
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
