import React from 'react';
import './index.css';
import Board from '../Board/index';
import Tie from '../Tie/index';
import J1 from '../J1/index';
import J2 from '../J2/index';
import Indicator from '../Indicator/index';
 
export default class Square extends React.Component {
  render() {
    return (
      <div className='game'>
        <Indicator />
        <Board />
        <div className='row'>
            <J1 />
            <Tie />
            <J2 />
        </div>
      </div>
    );
  }
}