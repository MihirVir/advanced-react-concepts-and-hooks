import React from "react"
import { ErrorHandler } from "./components/ErrorBoundaries/error.jsx";
import { ParentError } from "./components/ErrorBoundaries/ParentError.jsx"
import { CounterApp } from "./components/KeysAndStatePreservation/CounterApp.jsx";
import { EventApp } from "./components/EventListeners/EventApp.jsx";
import { LayoutEffectApp } from "./components/UseLayoutEffect/impl-use-effect.jsx";
import { UseIdApp } from "./components/UseId/use-id-impl.jsx"

const App = () => {
  return(
    <React.StrictMode>
      <UseIdApp />
    </React.StrictMode>
  );
};

export default App ;
