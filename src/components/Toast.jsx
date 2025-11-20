import React, { useEffect } from 'react';

const Toast = ({ message, type = 'info', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const getStyles = () => {
        switch (type) {
            case 'success': return { borderColor: 'var(--primary)', color: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' };
            case 'error': return { borderColor: 'red', color: 'red', boxShadow: '0 0 10px red' };
            case 'secret': return { borderColor: 'gold', color: 'gold', boxShadow: '0 0 10px gold', background: '#000' };
            default: return { borderColor: 'var(--secondary)', color: 'var(--secondary)' };
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '15px 25px',
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid',
            borderRadius: '5px',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'slideIn 0.3s ease-out',
            ...getStyles()
        }}>
            <span style={{ fontSize: '1.2rem' }}>
                {type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'secret' ? '🤫' : 'ℹ️'}
            </span>
            <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{message}</span>
            <style>
                {`
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                `}
            </style>
        </div>
    );
};

export default Toast;
