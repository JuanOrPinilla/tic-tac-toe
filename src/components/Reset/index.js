import React from 'react';
import './index.css';

export default class Reset extends React.Component {
  render() {
    return (
    <button className='reset-button'>
        <img className='reset-icon' src='./assets/reset.png' alt='Reset' />
    </button>
    );
  }
}