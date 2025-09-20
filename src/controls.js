import React from "react";

function Controls({reset}) {

  return (
    <div className="aside aside-right">         
        <button onClick={reset}>
            Почати заново
        </button>
    </div>
  );
}

export default Controls;
