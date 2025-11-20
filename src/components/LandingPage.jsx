import React from 'react';

const LandingPage = ({ onLogin, onRegister }) => {
    return (
        <div className="dashboard-panel landing-panel" style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 0, border: 'none', background: 'transparent' }}>
            <nav className="landing-nav" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 40px',
                borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
                background: 'rgba(10, 10, 15, 0.95)',
                backdropFilter: 'blur(10px)'
            }}>
                <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', textShadow: '0 0 10px var(--primary)' }}>
                    CYBER<span style={{ color: '#fff' }}>.QUIZ</span>
                </div>
                <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
                    <button className="cyber-btn small" onClick={onLogin} style={{ minWidth: '100px' }}>LOGIN</button>
                    <button className="cyber-btn small" onClick={onRegister} style={{ minWidth: '100px', borderColor: 'var(--secondary)', color: '#fff' }}>REGISTER</button>
                </div>
            </nav>

            <div className="hero-section" style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.15) 0%, rgba(0,0,0,0) 70%)'
            }}>
                <div className="hero-content" style={{ maxWidth: '800px', padding: '20px' }}>
                    <h1 style={{
                        fontSize: '4rem',
                        marginBottom: '20px',
                        lineHeight: '1.1',
                        color: '#fff',
                        textShadow: '0 0 20px rgba(0, 243, 255, 0.5)'
                    }}>
                        MASTER THE <span style={{ color: 'var(--primary)', textShadow: '0 0 20px var(--primary)' }}>CODE</span>
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#ccc',
                        marginBottom: '40px',
                        maxWidth: '600px',
                        margin: '0 auto 40px auto',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                    }}>
                        Gamified HTML & CSS Challenges.
                        Level up your skills and earn your certification.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <button className="cyber-btn large" onClick={onRegister}>
                            START MISSION
                            <span className="btn-tag">REGISTER</span>
                        </button>
                        <button className="cyber-btn large" onClick={onLogin} style={{ borderColor: '#fff', color: '#fff' }}>
                            CONTINUE
                            <span className="btn-tag">LOGIN</span>
                        </button>
                    </div>
                </div>

                <div className="hero-stats" style={{
                    display: 'flex',
                    gap: '60px',
                    marginTop: '80px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '40px'
                }}>
                    <div className="stat">
                        <h3 style={{ fontSize: '2rem', color: 'var(--secondary)', margin: 0, textShadow: '0 0 10px var(--secondary)' }}>3</h3>
                        <span style={{ fontSize: '0.9rem', color: '#aaa', letterSpacing: '1px' }}>MODULES</span>
                    </div>
                    <div className="stat">
                        <h3 style={{ fontSize: '2rem', color: 'gold', margin: 0, textShadow: '0 0 10px gold' }}>S+</h3>
                        <span style={{ fontSize: '0.9rem', color: '#aaa', letterSpacing: '1px' }}>RANKING</span>
                    </div>
                    <div className="stat">
                        <h3 style={{ fontSize: '2rem', color: 'var(--primary)', margin: 0, textShadow: '0 0 10px var(--primary)' }}>100%</h3>
                        <span style={{ fontSize: '0.9rem', color: '#aaa', letterSpacing: '1px' }}>FREE</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
