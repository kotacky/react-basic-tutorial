import './App.css';
import React, { useState } from 'react';

function Nakamura(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {props.example}： 
      <button onClick={() => setCount(count + 1)}>Click me</button>
      カウント：{count}
    </div>
  );
}

export default Nakamura;
