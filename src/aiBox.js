import React from "react";

function AIBox({aiPlayer, setAIPlayer}) {
  return (
    <div className="aside aside-left">
        <label>
            <input type="checkbox" checked={aiPlayer==='x'} onChange={_=>setAIPlayer('x')} />
            AI грає за x
        </label>
        <label>
            <input type="checkbox" checked={aiPlayer==='o'} onChange={_=>setAIPlayer('o')} />
            AI грає за o
        </label>
        <label>
            <input type="checkbox" checked={aiPlayer!=='x' && aiPlayer!=='o'} onChange={_=>setAIPlayer('')} />
            AI відпочиває
        </label>
    </div>
  );
}

export default AIBox;