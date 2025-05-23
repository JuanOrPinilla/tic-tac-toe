import React from 'react';
import './index.css';
import Square from '../Square/index';

export default class Board extends React.Component {
  render() {
    return (
      <>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }
}