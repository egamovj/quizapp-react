import React from 'react';

const QuestionCard = ({ question, selectedAnswer, onSelectAnswer }) => {
    return (
        <div className="options-stack">
            {question.options.map((option, index) => {
                let className = "cyber-option";
                if (selectedAnswer === option) {
                    className += " selected";
                }

                return (
                    <button
                        key={index}
                        className={className}
                        onClick={() => onSelectAnswer(option)}
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
