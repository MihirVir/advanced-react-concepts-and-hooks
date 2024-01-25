import React from "react"
import { ErrorHandler } from "./components/ErrorBoundaries/error.jsx";
import { ParentError } from "./components/ErrorBoundaries/ParentError.jsx"
import { CounterApp } from "./components/KeysAndStatePreservation/CounterApp.jsx";
import { EventApp } from "./components/EventListeners/EventApp.jsx";

const App = () => {
  return(
    <React.StrictMode>
      <EventApp />
    </React.StrictMode>
  );
};

export default App ;
