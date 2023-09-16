import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline cursor-pointer">
        Hello world!
      </h1>
      <div className="flex justify-center align-middle">
        <button
          className="border w-fit p-2 m-2 bg-slate-500 text-yellow-300"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
