import { React, useState } from 'react'
 
export default function App() {
  const [counter, setCounter] = useState(1);
 
  //decrease counter
const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };

  //increase counter
  const increase = () => {
    if (counter < 10) {
    setCounter(count => count + 1);
    }  
};
 
  
 
  return (
    <div className="counter">
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}