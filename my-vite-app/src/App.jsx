import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
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
