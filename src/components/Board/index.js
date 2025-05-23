import React from 'react';
import './index.css';
import Square from '../Square/index';

export default function Board({ turn, setTurn }) {


    return (
      <>
        <div className='board-row'>
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
        </div>
        <div className='board-row'>
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
        </div>
        <div className='board-row'>
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
        </div>
      </>
    );
 }