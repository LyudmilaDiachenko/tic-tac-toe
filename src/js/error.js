import React from "react";

function Error({error}) {
  return <div className={'error-box ' + (error ? 'error' : 'no-error')} />
}

export default Error;