import React, { useState } from 'react';

import Square from './Square';
import History from './History';
import Themes from './Themes';

// checking if the winner appeared //
const calculateWinner = squares => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
            return squares[a];
    }

    return null;
}

const Board = _ => {
    // default theme (shrimpy) //
    const [theme, setTheme] = useState({
        "name": "shrimp",
        "title": "Tic-Tac-Shrimp",
        "X": "🦐",
        "O": "👨‍🍳",
        "li": "🍤"
    });

    // history of the previous boards //
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // current board //
    const [squares, setSquares] = useState(Array(9).fill(null));
    // info if it's player X's turn //
    const [xTurn, setXTurn] = useState(true);

    // function that renders single square //
    const renderSquare = i => {
        return (
            <Square value={squares[i]} onClickEvent={() => handleClick(i)} X={theme.X} Y={theme.O} />
        );
    };

    // handling history buttons' events //
    const goToStep = n => {
        if (n === history.length -1)
            return;
        setSquares(history[n + 1]);
        setXTurn((history.length - 1 - n) % 2 === 0 ? xTurn : !xTurn);
        setHistory(history.slice(0, n + 1));
    };

    // handling squares' events //
    const handleClick = i => {
        const squaresCopy = [...squares];

        const winnerExists = calculateWinner(squaresCopy);
        const squareFilled = squaresCopy[i];
        if (winnerExists || squareFilled)
            return;

        squaresCopy[i] = xTurn ? 'X' : 'O';
        setHistory([...history, squares]);
        setXTurn(!xTurn);
        setSquares(squaresCopy);
    };

    // checking if the win occurred --> if yes, changing the status above the board //
    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner === 'X' ? theme.X : theme.O}` : history.length > 9 ? 'Draw!' : `Next player: ${xTurn ? theme.X : theme.O}`;

    // restarting game //
    const restart = _ => {
        setHistory([...history.splice(0, 1)]); // removing all boards (except the empty one) from the history //
        setSquares(Array(9).fill(null)); // cleaning the main board //
    }

    return (
        <div>
            <div id="title" style={{textAlign: 'center'}}>{theme.title}</div>
            <div style={{display: 'flex'}}>
                <Themes click={setTheme} bullet={theme.li} />
                <div>
                    <div id="status">{status}</div>
                    <div className="board-row">
                    </div>
                    <div className="board-row">
                        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
                    </div>

                    <button id="restart" onClick={() => restart()}>Restart</button>
                </div>
                <History n={history.length} click={goToStep} bullet={theme.li} />
            </div>
        </div>
    );
};

export default Board;