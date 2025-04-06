import React, { useState } from "react";
import "../component/contact.css";

export default function Contact() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount (count+1);
  };
  const decrement = () => {
    setCount (count-1);
  };
  return (
    <div>
      <h1>This is Contact Page</h1>
      <h1>The count is {count}</h1>
      <button onClick={decrement} className="btn1">- </button>
      <button onClick={increment} className="btn1">+</button>
    </div>
  );
}
