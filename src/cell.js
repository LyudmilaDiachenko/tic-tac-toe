import React from "react";

const classes = {
    x: 'cell-x',
    o: 'cell-o',
}

function Cell({value, onClick}) {
  return (
    <div
        className={'cell ' + classes[value]}
        onClick={onClick}
    >
      
    </div>
  );
}

export default Cell;