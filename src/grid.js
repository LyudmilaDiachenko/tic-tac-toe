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

function Grid(props) {
    const [grid, setGrid] = useState(
        [
            ['','',''], 
            ['','',''], 
            ['','',''], 
        ]
    )

    function onClick(row, col){
        if (!grid[row][col]){
            let newGrid = [...grid]
            newGrid[row][col] = props.turn
            setGrid(newGrid)

            props.setTurn(props.turn == 'x' ? 'o' : 'x')
        } else {
            props.showError()
        }
    }

    return (
        <div
            className={"grid " + classes[props.win]}
        >
            {grid.map(
                (row, rowNum) => <div key={'row-'+rowNum} className="row">
                    {row.map(
                        (col, colNum) =>
                            <Cell 
                                key={'col-'+colNum} 
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