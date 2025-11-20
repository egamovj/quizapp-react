import React from 'react';

const QuestionCard = ({ options, selectedOption, onAnswer, disabled, correctAnswer, showResult }) => {
    return (
        <div className="options-stack">
            {options.map((option, index) => {
                let className = "cyber-option";

                if (showResult) {
                    if (option === correctAnswer) {
                        className += " correct";
                    } else if (option === selectedOption) {
                        className += " wrong";
                    }
                } else if (selectedOption === option) {
                    className += " selected";
                }

                const style = {};
                if (showResult) {
                    if (option === correctAnswer) {
                        style.borderColor = 'var(--primary)';
                        style.boxShadow = '0 0 15px var(--primary)';
                        style.color = 'var(--primary)';
                    } else if (option === selectedOption) {
                        style.borderColor = 'var(--accent)';
                        style.boxShadow = '0 0 15px var(--accent)';
                        style.color = 'var(--accent)';
                    }
                }

                return (
                    <button
                        key={index}
                        className={className}
                        onClick={() => !disabled && onAnswer(option)}
                        disabled={disabled}
                        style={style}
                    >
                        <span className="opt-key">[{String.fromCharCode(65 + index)}]</span>
                        <span className="opt-val">{option}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default QuestionCard;
