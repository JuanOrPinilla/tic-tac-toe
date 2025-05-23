import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './components/Menu/index';
import Board from './components/Board/index';
import Game from './components/Game/index';
import Square from './components/Square/index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
reportWebVitals();
