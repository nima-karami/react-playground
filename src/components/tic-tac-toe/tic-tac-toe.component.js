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
    
    // change style based on value of the square
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
            [0, 1, 2],[3, 4, 5],[6, 7, 8],
            [0, 3, 6],[1, 4, 7],[2, 5, 8],
            [0, 4, 8],[2, 4, 6]
        ]
        
        // check patterns against current square setup
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            
            if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
                
                // actions to take when there is a winner
                setWinner(squares[a]);
                setTimeout(() => alert(`congratulations player ${squares[a]}!! You won!!`), 500)
                return squares[a];
            }

        }
        
        return null;
    }

    // React state hooks
    const [nextPlayer, setNextPlayer] = useState('X');
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [winner, setWinner] = useState('None');
  
    // click handler to be passed to square components
    function handleClick(i) {
        
        // check if there is a winner already or if squares have values
        if (calculateWinner(squares) || squares[i]) {
            return
          }
        
        // Determine which value to insert into squares: X or O
        if (nextPlayer === 'O' ) {
            squares[i] = 'O';           
            setNextPlayer('X')
        } else if (nextPlayer === 'X' ) {
            squares[i] = 'X';
            setNextPlayer('O')
        }

        // update squares and check if there's a winner
        setSquares(squares);
        calculateWinner(squares);

      }

    // reset everything to default values
    function handleReset() {
        setSquares(new Array(9).fill(null));
        setNextPlayer('X');
        setWinner('None')
    }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{nextPlayer}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner}</span></div>
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