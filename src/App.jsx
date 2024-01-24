import React from "react"
import { ErrorHandler } from "./components/ErrorBoundaries/error.jsx";
import { ParentError } from "./components/ErrorBoundaries/ParentError.jsx"
import { CounterApp } from "./components/KeysAndStatePreservation/CounterApp.jsx";

const App = () => {
  return(
    <React.StrictMode>
      <CounterApp />
    </React.StrictMode>
  );
}

export default App ;
