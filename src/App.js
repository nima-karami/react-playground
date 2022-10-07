import './App.css';
import { Fragment, useEffect, useState } from 'react';
import DigitalClock from './components/digital-clock/digital-clock.component';
import TicTacToe from './components/tic-tac-toe/tic-tac-toe.component';

function App() {

  return (
    <div className='container'>
      <div className='card'>
        <TicTacToe />
      </div>
      <div className='card'>
        <DigitalClock />
      </div>
    </div>
  );
}

export default App;
