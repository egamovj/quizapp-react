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
                        <span className="avatar">🧑‍💻</span>
                    </div>
                    <p>AGENT: YOU</p>
                </div>
            </div>

            <button className="cyber-btn large" onClick={onStart}>
                <span className="btn-glitch">MISSIYANI BOSHLAMOQ</span>
                <span className="btn-tag">START</span>
            </button>
        </div>
    );
};

export default Welcome;
