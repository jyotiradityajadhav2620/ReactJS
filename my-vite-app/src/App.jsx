import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 20) {
      alert("Value do not go beyound 20");
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter === 0) {
      alert("Value do not go in Negative");
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>counter is {counter}</h3>
      <button onClick={addValue}>Add Count</button>
      <button onClick={removeValue}>Remove Count</button>
    </>
  );
}

export default App;
