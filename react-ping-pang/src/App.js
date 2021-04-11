import React, { useEffect, useState } from 'react';

import './App.css';

import GameBoard from './components/GameBoard';

import useForm from './hooks/useForm';
import useFetch from './hooks/useFetch';
import Hello from './components/Hello';

function expensiveInitialState() {
  return 10;
}

const App = () => {
  const [count, setCount] = useState(() => expensiveInitialState());
  const [count2, setCount2] = useState(20);
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  
  const [showHello, setShowHello] = useState(false);

  // useEffect(() => {
  //   console.log("render");
  //   const onMouseMove = e => {
  //     console.log(e);
  //   }
  //   window.addEventListener('mousemove', onMouseMove)

  //   return () => {
  //     //  console.log('cleanup');
  //     window.removeEventListener('mousemove', onMouseMove);
  //   }
  // }, []);

  // fetch api: numbersapi.com/43/trivia
  const { data, loading } = useFetch("http://numbersapi.com/43/trivia");
  return (
    <div className="App">
             <div>{loading ? "loading..." : data}</div>
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
            }} >
            +
          </button>
          <div>count 1: {count} </div>
          <div>count 2: {count2} </div>

          {/* <GameBoard /> */}
        </div>
        <div>
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
