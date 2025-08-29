import { useState } from "react";
import "./App.css";

export default function SecondPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Second Page</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
