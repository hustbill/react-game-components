import { useEffect, useState } from 'react';

import './App.css';

import GameBoard from './components/GameBoard';

function App() {


  return (
    <div className="App">
      <div>
        <h3>Ping Pang Game using React</h3>

        <h4>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Demo Source </a>
        </h4>

        <div>
          <GameBoard />
        </div>

      </div>
    </div>
  );
}

export default App;
