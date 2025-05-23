import React, { useState } from 'react';
import './index.css';

export default function Square({ turn, setTurn }) {
  const [value, setValue] = useState(null);

   const handleClick = () => {
    if (value !== null) return; 

    setValue(turn);
    setTurn(prev => (prev === 'O' ? 'X' : 'O')); 
  };

  const getIcon = () => {
    if (value === 'O') {
      return <img src='./assets/blue_circle.png' alt='O' className='o-icon' />;
    } else if (value === 'X') {
      return <img src='./assets/beige_x.png' alt='X' className='x-icon' />;
    }
    return null;
  };

  return (
      <div>
        <button className='Square' onClick={handleClick}>{getIcon()}</button>
      </div>
  );
}