import React from "react";
import "./App.css";
import Button from "./components";
import { usePressObserver } from "./custom_hooks";

function App() {
  const pressed = usePressObserver({ watchKey: "n" });
  return (
    <div className="App">
      <Button active={pressed}>butoton</Button>
      <div className="instructions">
        Type the <code>n</code> key
      </div>
    </div>
  );
}

export default App;
