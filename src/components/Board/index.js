import React from 'react';
import './index.css';
import Square from '../Square/index';
import Winner from '../Winner';

export default function Board({ turn, setTurn, tablero, setTablero, winner, setWinner, setIsTie }) {
  const handleClick = (row, col) => {
  if (tablero[row][col] !== '' || winner) return;
    const newTablero = tablero.map((fila, r) =>
      fila.map((cell, c) => (r === row && c === col ? turn : cell))
    );
    setTablero(newTablero);

    const ganador = checkWinner(newTablero);
    if (ganador) {
      setWinner(ganador);
      console.log(`El ganador es: ${ganador}`);
    } else if (newTablero.flat().every(cell => cell !== '')) {
      setIsTie(true);
      console.log('¡Empate!');
    } else {
      setTurn(prev => (prev === 'O' ? 'X' : 'O'));
    }
  };

const checkWinner = (board) => {
  const lines = [
    
    [ [0,0], [0,1], [0,2] ],
    [ [1,0], [1,1], [1,2] ],
    [ [2,0], [2,1], [2,2] ],
    // Columnas
    [ [0,0], [1,0], [2,0] ],
    [ [0,1], [1,1], [2,1] ],
    [ [0,2], [1,2], [2,2] ],
    // Diagonales
    [ [0,0], [1,1], [2,2] ],
    [ [0,2], [1,1], [2,0] ]
  ];

  for (const [[a1,a2],[b1,b2],[c1,c2]] of lines) {
    const val1 = board[a1][a2];
    const val2 = board[b1][b2];
    const val3 = board[c1][c2];
    if (val1 && val1 === val2 && val1 === val3) {
      return val1;
    }
  }
  return null; 
};

  return (
    <>
    {tablero.map((fila, row) => (
      <div className='board-row' key={row}>
        {fila.map((cell, col) => (
          <Square
            key={`${row}-${col}`}
            value={cell}
            onClick={() => handleClick(row, col)}
          />
        ))}
      </div>
    ))}
    <Winner winner={winner} />
  </>

  );
}
