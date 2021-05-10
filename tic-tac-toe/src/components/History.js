import React from 'react';

const History = ({ n, click, bullet }) => {
    // printing list with buttons that point to the specific moves (history) //
    return (
        <div className="history">
            <center>History</center>
            <ul style={{listStyleType: `'${bullet} '`}}>
                {Array(n).fill('0').map((item, index) => (
                    <li key={index}><button onClick={() => click(index)}>Step: {index + 1}</button></li>
                ))}
            </ul>
        </div>
    );
};

export default History;