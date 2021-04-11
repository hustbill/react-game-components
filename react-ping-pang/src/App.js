import React, { useEffect, useState } from 'react';

import './App.css';

import GameBoard from './components/GameBoard';

import useForm from './hooks/useForm';
import useFetch from './hooks/useFetch';
import useMouseMove from './hooks/useMouseMove';

import Hello from './components/Hello';

function expensiveInitialState() {
  return 20;
}

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });

  const [showHello, setShowHello] = useState(false);
  // fetch api: numbersapi.com/43/trivia
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const [count2, setCount2] = useState(() => expensiveInitialState());
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    console.log('count: ', count);
    localStorage.setItem("count", JSON.stringify(count));

    return () => {
      console.log('cleanup');
    }
  }, [count])


  return (
    <div className="App">
      <div style={{ padding: 5 }}>
        <h3>Ping Pang Game using React</h3>
        <h4>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Demo Source </a>
        </h4>


        <div style={{ padding: 5 }}>
          <button
            onClick={() => {
              setCount(c => c + 1);
              setCount2(c => c + 1);
            }} >
            Increment
          </button>
          <div id="fetchAPI" style={{ padding: 5 }}>
            <div>count 1: {count} </div>
            <div>count 2: {count2} </div>
            <div>{!data ? "loading..." : data}</div>
            <br />
          </div>

          {/* <GameBoard /> */}
        </div>
        <div style={{ padding: 5 }}>
          <button onClick={() => setShowHello(!showHello)} name="toggleShowHello"> ShowHello</button>
          <br />
          {showHello && <Hello />}
        </div>
        <div>

          <input name="email" value={values.email} onChange={handleChange} />
          <input
            name="firstName"
            placeholder="first name"
            value={values.firstName}
            onChange={handleChange}
          />
          <input type="password" name="password" value={values.password} onChange={handleChange} />
        </div>

      </div>
    </div >
  );
}

export default App;
