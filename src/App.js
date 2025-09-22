import React, { useState } from "react";
import Grid from './components/grid'
import Error from './components/error'
import Header from './components/header';
import Controls from './components/controls'
import AIBox from './components/aiBox';

function App() {
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  const [turn, setTurn] = useState('x')
  const [log, setLog] = useState([])
  const [aiPlayer, setAIPlayer] = useState('o')
  const [grid, setGrid] = useState(
        [
            ['','',''], 
            ['','',''], 
            ['','',''], 
        ]
  )

  function reset(){
    setGrid(
      [
        ['','',''], 
        ['','',''], 
        ['','',''], 
      ]
    )
    setWin(false)
    setTurn('x')
  }

  function showError() {
      setError(true)
      setTimeout(() => setError(false), 1000);
  }
  
  return (
    <div className="App">
      <div className="App-header">

        <Header {...{turn, win, error}}/>

        <AIBox {...{aiPlayer, setAIPlayer}}/>

        <Grid {...{grid, setGrid, win, setWin, turn, setTurn, showError, log, setLog, aiPlayer}} />
        <Controls {...{reset, log, setLog}} />        
        <Error error={error} />
          
      </div>
    </div>
  );
}

export default App;
