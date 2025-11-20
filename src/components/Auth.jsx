import React, { useState } from 'react';
import { loginUser, registerUser } from '../utils/storage';

const Auth = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (isLogin) {
            const res = await loginUser(formData.username, formData.password);
            if (res.success) {
                onLogin(res.user);
            } else {
                setError(res.message);
            }
        } else {
            if (!formData.name || !formData.username || !formData.password) {
                setError('All fields are required');
                return;
            }
            const res = await registerUser(formData.name, formData.username, formData.password);
            if (res.success) {
                onLogin(res.user);
            } else {
                setError(res.message);
            }
        }
    };

    return (
        <div className="dashboard-panel auth-panel">
            <div className="panel-header">
                <span className="status-blink">🔒 ACCESS CONTROL</span>
                <span className="panel-id">AUTH_PROTOCOL_V1</span>
            </div>

            <div className="auth-content">
                <div className="auth-card">
                    <h2>{isLogin ? 'SYSTEM LOGIN' : 'NEW AGENT REGISTRATION'}</h2>

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="form-group">
                                <label>FULL NAME</label>
                                <input
                                    type="text"
                                    className="cyber-input"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label>USERNAME</label>
                            <input
                                type="text"
                                className="cyber-input"
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={e => setFormData({ ...formData, username: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input
                                type="password"
                                className="cyber-input"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        {error && <div className="error-msg">⚠️ {error}</div>}

                        <button type="submit" className="cyber-btn full-width">
                            {isLogin ? 'AUTHENTICATE' : 'REGISTER AGENT'}
                        </button>
                    </form>

                    <div className="auth-switch">
                        <p>
                            {isLogin ? "New to the system?" : "Already have access?"}
                            <button
                                className="link-btn"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Initialize Registration" : "Access Login"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
