import React from 'react';
import './index.css';

export default function Indicator({turn}) {
    const getIcon = () => {
      if (turn === 'O') {
        return <img src='./assets/grey_circle.png' alt='O' className='turn-icon-o' />;
      } else if (turn === 'X') {
        return <img src='./assets/grey_x.png' alt='X' className='turn-icon-x' />;
      }
      return null;
    };
    return (
      <div className='indicator'>
        {getIcon()}
        <h2 className='h2-gray-turn'>TURN</h2>
      </div>
    );
  }