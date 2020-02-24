import React, { useState } from 'react';

function TestHook() {
  const [counter, setCounter] = useState(124)
  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter-1)}>Pint Sold!</button>
    </div>
  )
}

export default TestHook;
