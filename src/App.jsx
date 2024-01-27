import React from "react"
import { ErrorHandler } from "./components/ErrorBoundaries/error.jsx";
import { ParentError } from "./components/ErrorBoundaries/ParentError.jsx"
import { CounterApp } from "./components/KeysAndStatePreservation/CounterApp.jsx";
import { EventApp } from "./components/EventListeners/EventApp.jsx";
import { LayoutEffectApp } from "./components/UseLayoutEffect/impl-use-effect.jsx";
import { UseIdApp } from "./components/UseId/use-id-impl.jsx"
import { UseCallbackRefApp } from "./components/UseCallbackRef/UseCallbackRefApp.jsx";
import { UseImperativeApp } from "./components/UseImperativeHandler/UseImperativeApp.jsx";

const App = () => {
  return(
    <React.StrictMode>
      <UseImperativeApp />
    </React.StrictMode>
  );
};

export default App ;
