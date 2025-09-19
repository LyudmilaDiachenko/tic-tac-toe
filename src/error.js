import React from "react";

function Error({error}) {
    console.log(error)
  return <div className={'error-box ' + (error ? 'error' : 'no-error')} />
}

export default Error;