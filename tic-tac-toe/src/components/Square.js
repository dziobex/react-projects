import React, { useState } from 'react';

const Square = ({ value, onClickEvent, X, Y }) => {
    // handling the value of the square ("X", "O" or "") //
    return (
        <div 
            className="square"
            onClick={onClickEvent}
        >
            {value === 'X' ? X : value === 'O' ? Y : ''}
        </div>
    );
};

export default Square;