import React, { useState } from "react";
import Cell from './cell'

const classes = {
    win_h1: 'win-h1',
    win_h2: 'win-h2',
    win_h3: 'win-h3',
    win_v1: 'win-v1',
    win_v2: 'win-v2',
    win_v3: 'win-v3',
    win_d1: 'win-d1',
    win_d2: 'win-d2',
}

function Grid() {
    const [win, setWin] = useState(false)
    const [turn, setTurn] = useState('x')
    const [grid, setGrid] = useState(
        [
            ['','',''], 
            ['','',''], 
            ['','',''], 
        ]
    )

    function onClick(row, col){
        console.log(row, col, turn)
        
        let newGrid = [...grid]
        newGrid[row][col] = turn
        setGrid(newGrid)

        setTurn(turn == 'x' ? 'o' : 'x')
    }

    return (
        <div
            className={"grid " + classes[win]}
        >
            {grid.map(
                (row, rowNum) => <div key={rowNum} className="row">
                    {row.map(
                        (col, colNum) =>
                            <Cell 
                                key={colNum} 
                                value={col} 
                                onClick={
                                    () => onClick(rowNum, colNum) //чий хід
                                }
                            />
                    )}
                </div>
            )}
        
        </div>
    );
}

export default Grid