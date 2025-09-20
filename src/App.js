import './App.css';
import React, { useState } from "react";
import Grid from './grid'
import Error from './error'
import Header from './header';
import Controls from './controls'

function App() {
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  const [turn, setTurn] = useState('x')
  const [grid, setGrid] = useState(
        [
            ['','',''], 
            ['','',''], 
            ['','',''], 
        ]
  )

  function reset(){
      setWin(false)
      setTurn('x')
      setGrid(
          [
              ['','',''], 
              ['','',''], 
              ['','',''], 
          ]
      )
  }


  function showError() {
      setError(true)
      setTimeout(() => setError(false), 1000);
  }
  
  return (
    <div className="App">
      <div className="App-header">

        <Header {...{turn, win, error}}/>
        <Grid {...{grid, setGrid, win, setWin, turn, setTurn, showError}} />
        <Controls {...{reset}} />
        <Error error={error} />
          
      </div>
    </div>
  );
}

export default App;
