import React from "react";

function Controls({reset, log, setLog}) {

  return (
    <div className="aside aside-right">
      <table>
        <caption>Статистика гравців</caption>
        <thead>
          <tr>
            <th>×</th>
            <th>○</th>
          </tr>
        </thead>
        <tbody>
          {log.map(e=>
            <tr>
              <td>{e=='x'?'✓':'-'}</td>
              <td>{e=='o'?'✓':'-'}</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>
              {log.reduce((acc, i)=>i==="x"?++acc:acc, 0)}
            </th>
            <th>
              {log.reduce((acc, i)=>i==="o"?++acc:acc, 0)}
            </th>
          </tr>
        </tfoot>
      </table>
      <div className="btn-box">
        <button onClick={()=>setLog([])}>
          Скинути статистику
        </button>    
        <button onClick={reset}>
            Почати заново
        </button>  
      </div>
    </div>
  );
}

export default Controls;
