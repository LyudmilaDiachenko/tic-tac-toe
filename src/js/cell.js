import React from "react";

const classes = {
    x: 'cell-x',
    o: 'cell-o',
}

function Cell({value, onClick, aiPlayer, turn}) {
  return (
    <div
        className={'cell ' + classes[value]}

        onClick={(aiPlayer === turn || aiPlayer === 'b')?null:onClick}
    >
      
    </div>
  );
}

export default Cell;