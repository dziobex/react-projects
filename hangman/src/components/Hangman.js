import React from 'react';

const Hangman = ({ fails }) => {
    return (
        <svg className="hangman" width={500} height={500}>
        {/* Gallows */}
        <line x1={0} y1={495} x2={150} y2={495} strokeWidth={5} stroke="black" />
        <line x1={70} x2={70} y1={495} y2={50} strokeWidth={5} stroke="black" />
        <line x1={70} x2={275} y1={51.5} y2={51.5} strokeWidth={5} stroke="black" />
        <line x1={272.5} x2={272.5} y1={51.5} y2={120} strokeWidth={5} stroke="black" />
        {/* Head */}
        <circle cx={270} cy={160} r={40} stroke={fails > 0 ? "black" : "none"} strokeWidth={5} fill="none" />

        {/* Body */}
        <line x1={270} x2={270} y1={200} y2={320} strokeWidth={5} stroke={fails > 1 ? "black" : "none"} />
        <line x1={270} x2={220} y1={200} y2={290} strokeWidth={5} stroke={fails > 2 ? "black" : "none"} />
        <line x1={270} x2={320} y1={200} y2={290} strokeWidth={5} stroke={fails > 3 ? "black" : "none"} />
        <line x1={270} x2={220} y1={320} y2={400} strokeWidth={5} stroke={fails > 4 ? "black" : "none"} />
        <line x1={270} x2={320} y1={320} y2={400} strokeWidth={5} stroke={fails > 5 ? "black" : "none"} />

        </svg>
    );
};

export default Hangman;