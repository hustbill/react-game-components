import React, { useEffect, useState } from 'react';

import './App.css';

import GameBoard from './components/GameBoard';

function expensiveInitialState() {
  return 10;

}
const App = () => {
  const [count, setCount] = useState(() => expensiveInitialState());
  const [count2, setCount2] = useState(20);
  const [count3, setCount3] = useState(30);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <button
            onClick={() => {
              setCount(c => c + 1);
              setCount2(c => c + 1);
              setCount3(c => c + 1);            
          }} >
            +
          </button>
        <div>count 1: {count} </div>
        <div>count 2: {count2} </div>
        <div>count 3: {count3} </div>

        {/* <GameBoard /> */}
      </div>
      <div>
        <input
          name="email"
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />
        <input 
          type="password"
          name="password"
          value={password}
          onChange={ e => setPassword(e.target.value)}
          />
      </div>

    </div>
    </div >
  );
}

export default App;
