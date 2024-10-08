import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Navigation from "./components/Navigation/Navigation";
import "./components/Navigation/Navigation.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Hello /> <Message />
      </div>
      <div className="card">
        <p>Current count: {count}</p>
        <button
          onClick={() =>
            setCount((count) => (count === 100 ? count : count + 1))
          }
        >
          +
        </button>
        <button
          onClick={() => setCount((count) => (count === 0 ? count : count - 1))}
        >
          -
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
