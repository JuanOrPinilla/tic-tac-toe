import React from 'react';
import './index.css';

export default function Square({ value, onClick }) {
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
      <button className='Square' onClick={onClick}>
        {getIcon()}
      </button>
    </div>
  );
}
