import React, { useState } from 'react';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white',
  'cursor': 'pointer',
}

const oStyle = {
    'width':'60px',
    'height':'60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'blue',
    'cursor': 'pointer',
}


const xStyle = {
    'width':'60px',
    'height':'60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'red',
    'cursor': 'pointer',
}


const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
  'cursor': 'pointer',
}





function Square({ value, onClick }) {
    let style = squareStyle;

    if (value === 'X') {
        style = xStyle;
    } else if (value === 'O') {
        style = oStyle;
    }

    return (<div className="square" style={style} onClick={onClick}>{value}</div>);
  
}

function Board() {
    
    // Check if anyone has won the game
    function calculateWinner(squares) {
        
        // tic-tac-toe winning patterns
        const winningPatterns = [
            [1, 2, 3],[4, 5, 6],[7, 8, 9],
            [1, 4, 7],[2, 5, 8],[3, 6, 9],
            [1, 5, 9],[3, 5, 7]
        ]

        // check patterns against current square setup
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a,b,c] = winningPatterns[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }

            return null;
        }

    }

    const [nextPlayer, setNextPlayer] = useState('X');
    const [squares, setSquares] = useState(new Array(9).fill(null));
    console.log('squares', squares);

    function handleClick(i) {
        console.log('click')
        if (nextPlayer === 'O' && squares[i] === null) {
            squares[i] = 'O';
            setSquares(squares);
            setNextPlayer('X')
        } else if (nextPlayer === 'X'  && squares[i] === null) {
            squares[i] = 'X';
            console.log('X')
            setSquares(squares);
            setNextPlayer('O')
        }

      }

    function handleReset() {
        setSquares(new Array(9).fill(null));
        setNextPlayer('X');
    }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{nextPlayer}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
      <button style={buttonStyle} onClick={handleReset}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function TicTacToe() {
  
  
    return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default TicTacToe;