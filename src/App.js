import './App.css';
import React, { useState } from "react";
import Grid from './grid'
import Error from './error'
import Header from './header';

function App() {
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  const [turn, setTurn] = useState('x')

  function showError() {
      setError(true)
      setTimeout(() => setError(false), 1000);
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <Header {...{turn, win, error}}/>
        <Grid {...{win, setWin, turn, setTurn, showError}} />
        <Error error={error} />


      </header>
    </div>
  );
}

export default App;
