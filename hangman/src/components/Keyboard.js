import React from 'react';

const Keyboard = ({ click, keys }) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // rendering keyboard //
    return (
        <div className="keyboard">
            {alphabet.split('').map((letter, index) => (
                <button onClick={(e) => click(e)} disabled={keys[index] !== null} style={{backgroundColor: keys[index] === null ? "white" : keys[index] ? "green" : "red"}}>{letter}</button>
            ))}
        </div>
    );
};

export default Keyboard;