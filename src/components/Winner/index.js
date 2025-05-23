import React from "react";
import "./index.css";

export default function Winner({ winner }) {
  const getIcon = () => {
    if (winner === 'O') {
      return <img src='./assets/blue_circle_winner.png' alt='O' className='o-icon' />;
    } else if (winner === 'X') {
      return <img src='./assets/beige_x.png' alt='X' className='x-icon' />;
    }
    return null;
  };

  const getTextClass = () => {
    if (winner === 'O') return 'winner-text-O';
    if (winner === 'X') return 'winner-text-X';
    return '';
  };

  const getNextButtonClass = () => {
  if (winner === 'O') return 'next-button-O';
  if (winner === 'X') return 'next-button-X';
  return 'next-button'; // valor por defecto
};

  return (
    <div className={`winner ${winner ? 'visible' : ''}`}>
        {winner && (
        <>
            <h2 className="you-won">YOU WON</h2>
            <div className="winner-text">
            {getIcon()}
            <h2 className={getTextClass()}>TAKES THE ROUND</h2>
            </div>
            <div className="buttons">
            <button className="quit-button">
                <h2>QUIT</h2>
            </button>
            <button className={getNextButtonClass()}>
                <h2>NEXT ROUND</h2>
            </button>
            </div>
        </>
        )}
    </div>
    );
}
