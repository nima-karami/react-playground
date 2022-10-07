import './App.css';
import { Fragment, useEffect, useState } from 'react';
import DigitalClock from './components/digital-clock/digital-clock.component';
import TicTacToe from './components/tic-tac-toe/tic-tac-toe.component';

function App() {

  return (
    <div className='container'>
      <div className='card-container'>
        <h3>TicTacToe</h3>
        <div className='card-content'>
          <TicTacToe />  
        </div>
      </div>

      <div className='card-container'>
        <h3>Digital clock</h3>
        <div className='card-content'>
          <DigitalClock />  
        </div>
      </div>
    </div>
  );
}

export default App;
