import React from 'react';
import './index.css';
import Board from '../Board/index';
import Tie from '../Tie/index';
import J1 from '../J1/index';
import J2 from '../J2/index';
import Indicator from '../Indicator/index';
import Reset from '../Reset';
 
export default class Square extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-info'>
          <div className='left'>
            <img className='indicator-icon-o' src='./assets/small_blue_O.png' alt='Icon' />
            <img className='indicator-icon-x' src='./assets/small_beige_x.png' alt='Icon' />
          </div>
          <div className='center'><Indicator /></div>
          <div className='right'><Reset /></div>
        </div>
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