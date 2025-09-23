import React, { useEffect } from "react";
import Cell from './cell'

function Grid({turn, setTurn, win, setWin, showError, grid, setGrid, log, setLog, aiPlayer}) {
    function aiTurn(){
        if (win) return;
        let allowedTurns = [];
        if (aiPlayer === turn || aiPlayer === 'b') {
            grid.forEach(
                (row, rn) => {
                    row.forEach(
                        (col, cn) => {
                            if (!col){
                                allowedTurns.push([rn, cn])
                            }
                        }
                    )
                }
            )
            allowedTurns.sort(_ => Math.random() > 0.5 ? 1 : -1)
            setTimeout(_=>onClick(allowedTurns[0][0], allowedTurns[0][1]), 1000)
        }

    }
    
    function onClick(row, col){
        if (!grid[row][col] && !win){
            let newGrid = [...grid]
            newGrid[row][col] = turn
            setGrid(newGrid)
            validateWin(newGrid) || setTurn(turn === 'x' ? 'o' : 'x')
        } else if (win) {
            // noop
        } else {
            showError()
        }
    }

    function validateWin(grid){
        let isWin = false;
        if (grid[0][0] && grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]){
            isWin = submitWin('win_h1')
        } else if (grid[1][0] && grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]){
            isWin = submitWin('win_h2')
        } else if (grid[2][0] && grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]){
            isWin = submitWin('win_h3')
        } else if (grid[0][0] && grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]){
            isWin = submitWin('win_v1')
        } else if (grid[0][1] && grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]){
            isWin = submitWin('win_v2')
        } else if (grid[0][2] && grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]){
            isWin = submitWin('win_v3')
        } else if (grid[0][0] && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]){
            isWin = submitWin('win_d1')
        } else if (grid[0][2] && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]){
            isWin = submitWin('win_d2')
        } else if (
            grid[0][0] && grid[0][1] && grid[0][2] && 
            grid[1][0] && grid[1][1] && grid[1][2] && 
            grid[2][0] && grid[2][1] && grid[2][2]){
            isWin = submitWin("draw")
        }
        return isWin;
    }

    function submitWin(winType){
        setLog([...log].concat(winType === "draw" ? '' : turn))
        setWin(winType)
        return true;
    }

    useEffect(() => {
        aiTurn()
    }, [turn, aiTurn]);
    
    return (
        <div className={"grid " + win}>
            {grid.map(
                (row, rowNum) => <div key={'row-'+rowNum} className="row">
                    {row.map(
                        (col, colNum) =>
                            <Cell 
                                turn={turn}
                                aiPlayer={aiPlayer}
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