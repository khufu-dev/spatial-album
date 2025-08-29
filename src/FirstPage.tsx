import { useState } from "react";
import { Link } from "react-router-dom";
import { initScene } from "@webspatial/react-sdk";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function FirstPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card count-card" enable-xr>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card link-card" enable-xr>
        <h2>Open Second Page</h2>
        <p>
          <Link to="/second-page" target="_blank" enable-xr className="link">
            Open Second Page with a Link
          </Link>
        </p>
        <p>
          <button
            type="button"
            onClick={() => {
              initScene("secondScene", (prevConfig) => {
                return {
                  ...prevConfig,
                  defaultSize: { width: 500, height: 500 },
                };
              });
              globalThis.open(`${__XR_ENV_BASE__}/second-page`, "secondScene");
            }}
          >
            Open Second Page with a Button
          </button>
        </p>
      </div>
    </>
  );
}
