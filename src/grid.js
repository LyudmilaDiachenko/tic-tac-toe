import React, { useState } from "react";
import Cell from './cell'

function Grid({turn,setTurn, win, setWin, showError, grid, setGrid, log, setLog}) {
    function onClick(row, col){
        if (!grid[row][col] && !win){
            let newGrid = [...grid]
            newGrid[row][col] = turn
            setGrid(newGrid)
            validateWin(newGrid)
        } else {
            showError()
        }
    }

    function validateWin(newGrid){
        if (newGrid[0][0] && newGrid[0][0] === newGrid[0][1] && newGrid[0][1] === newGrid[0][2]){
            submitWin('win_h1')
        } else if (newGrid[1][0] && newGrid[1][0] === newGrid[1][1] && newGrid[1][1] === newGrid[1][2]){
            submitWin('win_h2')
        } else if (newGrid[2][0] && newGrid[2][0] === newGrid[2][1] && newGrid[2][1] === newGrid[2][2]){
            submitWin('win_h3')
        } else if (newGrid[0][0] && newGrid[0][0] === newGrid[1][0] && newGrid[1][0] === newGrid[2][0]){
            submitWin('win_v1')
        } else if (newGrid[0][1] && newGrid[0][1] === newGrid[1][1] && newGrid[1][1] === newGrid[2][1]){
            submitWin('win_v2')
        } else if (newGrid[0][2] && newGrid[0][2] === newGrid[1][2] && newGrid[1][2] === newGrid[2][2]){
            submitWin('win_v3')
        } else if (newGrid[0][0] && newGrid[0][0] === newGrid[1][1] && newGrid[1][1] === newGrid[2][2]){
            submitWin('win_d1')
        } else if (newGrid[0][2] && newGrid[0][2] === newGrid[1][1] && newGrid[1][1] === newGrid[2][0]){
            submitWin('win_d2')
        } else if (
            newGrid[0][0] && newGrid[0][1] && newGrid[0][2] && 
            newGrid[1][0] && newGrid[1][1] && newGrid[1][2] && 
            newGrid[2][0] && newGrid[2][1] && newGrid[2][2]){
            submitWin("draw")
        } else {
            setTurn(turn === 'x' ? 'o' : 'x')
        }
    }

    function submitWin(winType){
        setLog([...log].concat(winType=="draw" ? '' : turn))
        setWin(winType)
    }

    return (
        <div className={"grid " + win}>
            {grid.map(
                (row, rowNum) => <div key={'row-'+rowNum} className="row">
                    {row.map(
                        (col, colNum) =>
                            <Cell 
                                key={'col-'+colNum} 
                                value={col} 
                                onClick={
                                    () => onClick(rowNum, colNum)
                                }
                            />
                    )}
                </div>
            )}
        </div>
    );
}

export default Grid