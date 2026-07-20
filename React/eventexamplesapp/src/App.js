import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Static Message");
  }

  function increase() {
    increment();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handlePress() {
    alert("I was clicked");
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Event Examples App</h1>

      <h2>Counter : {count}</h2>

      <button onClick={increase}>
        Increment
      </button>

      &nbsp;

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handlePress}>
        OnPress
      </button>

      <hr />

      <CurrencyConvertor />

    </div>
  );
}

export default App;