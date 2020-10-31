import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello World, it's {now.toString()}</p>
      <p>{a} + {b} is {a+b}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))