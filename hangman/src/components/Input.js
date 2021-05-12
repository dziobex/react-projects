import React from 'react';

const Input = ({ phrase, guessed }) => {
    // setting input value:
    // unknown letter: '_ '
    // space: ' - '
    return (
        <div className="userInput">
            {phrase.split('').map(p => (
                guessed.includes(p) ? `${p} ` : p !== ' ' ? '_ ' : ' - '
            ))}
        </div>
    );
};

export default Input;