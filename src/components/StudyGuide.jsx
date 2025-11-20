import React, { useState } from 'react';

const StudyGuide = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('html');

    const content = {
        html: [
            { title: 'Document Structure', code: '<html>\n  <head>...</head>\n  <body>...</body>\n</html>', desc: 'The basic building blocks of a web page.' },
            { title: 'Headings', code: '<h1>Title</h1>\n<h2>Subtitle</h2>', desc: 'h1 is the most important, h6 is the least.' },
            { title: 'Links', code: '<a href="url">Link Text</a>', desc: 'Creates a hyperlink to another page.' },
            { title: 'Images', code: '<img src="image.jpg" alt="Desc">', desc: 'Embeds an image. "alt" is for accessibility.' },
            { title: 'Lists', code: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>', desc: 'ul = Unordered (bullets), ol = Ordered (numbers).' },
            { title: 'Div & Span', code: '<div>Block</div>\n<span>Inline</span>', desc: 'div is a block container, span is for inline text.' }
        ],
        css: [
            { title: 'Selectors', code: 'h1 { ... }  /* Element */\n.class { ... } /* Class */\n#id { ... }    /* ID */', desc: 'How to target elements to style them.' },
            { title: 'Colors', code: 'color: red;\nbackground-color: #000;', desc: 'Sets text and background colors.' },
            { title: 'Box Model', code: 'margin: 10px;\npadding: 20px;\nborder: 1px solid red;', desc: 'Space outside (margin) and inside (padding).' },
            { title: 'Flexbox', code: 'display: flex;\njustify-content: center;\nalign-items: center;', desc: 'Powerful layout tool for aligning items.' },
            { title: 'Fonts', code: 'font-size: 16px;\nfont-family: Arial;', desc: 'Controls text size and typeface.' }
        ],
        js: [
            { title: 'Variables', code: 'let x = 10;\nconst name = "Agent";', desc: 'let can change, const cannot.' },
            { title: 'Functions', code: 'function sayHello() {\n  alert("Hello!");\n}', desc: 'Reusable blocks of code.' },
            { title: 'Events', code: '<button onclick="run()">', desc: 'Reacting to user actions like clicks.' },
            { title: 'Conditions', code: 'if (score > 50) {\n  win();\n} else {\n  lose();\n}', desc: 'Making decisions in code.' },
            { title: 'DOM', code: 'document.getElementById("app")', desc: 'Accessing HTML elements from JavaScript.' }
        ]
    };

    return (
        <div className="dashboard-panel">
            <div className="panel-header">
                <span className="status-blink">💾 DATA BANK</span>
                <span className="panel-id">ARCHIVE_V.1.0</span>
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

            <div className="admin-content" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="tabs" style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                    <button
                        className={`cyber-btn small ${activeTab === 'html' ? '' : 'outline'}`}
                        onClick={() => setActiveTab('html')}
                        style={{ opacity: activeTab === 'html' ? 1 : 0.6 }}
                    >
                        HTML_DOCS
                    </button>
                    <button
                        className={`cyber-btn small ${activeTab === 'css' ? '' : 'outline'}`}
                        onClick={() => setActiveTab('css')}
                        style={{ borderColor: 'var(--secondary)', color: activeTab === 'css' ? '#000' : 'var(--secondary)', background: activeTab === 'css' ? 'var(--secondary)' : 'transparent', opacity: activeTab === 'css' ? 1 : 0.6 }}
                    >
                        CSS_STYLES
                    </button>
                    <button
                        className={`cyber-btn small ${activeTab === 'js' ? '' : 'outline'}`}
                        onClick={() => setActiveTab('js')}
                        style={{ borderColor: 'gold', color: activeTab === 'js' ? '#000' : 'gold', background: activeTab === 'js' ? 'gold' : 'transparent', opacity: activeTab === 'js' ? 1 : 0.6 }}
                    >
                        JS_LOGIC
                    </button>
                </div>

                <div className="scroll-area" style={{ flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {content[activeTab].map((item, index) => (
                            <div key={index} style={{
                                background: 'rgba(0,0,0,0.3)',
                                border: `1px solid ${activeTab === 'html' ? 'var(--primary)' : activeTab === 'css' ? 'var(--secondary)' : 'gold'}`,
                                padding: '15px',
                                borderRadius: '5px'
                            }}>
                                <h3 style={{
                                    color: activeTab === 'html' ? 'var(--primary)' : activeTab === 'css' ? 'var(--secondary)' : 'gold',
                                    marginTop: 0,
                                    borderBottom: '1px solid #333',
                                    paddingBottom: '5px',
                                    marginBottom: '10px'
                                }}>
                                    {item.title}
                                </h3>
                                <pre style={{
                                    background: '#111',
                                    padding: '10px',
                                    borderRadius: '3px',
                                    overflowX: 'auto',
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                    color: '#fff',
                                    border: '1px dashed #444'
                                }}>
                                    {item.code}
                                </pre>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '10px' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyGuide;
