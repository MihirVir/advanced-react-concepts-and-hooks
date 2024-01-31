import React from "react"
import { ErrorHandler } from "./components/ErrorBoundaries/error.jsx";
import { ParentError } from "./components/ErrorBoundaries/ParentError.jsx"
import { CounterApp } from "./components/KeysAndStatePreservation/CounterApp.jsx";
import { EventApp } from "./components/EventListeners/EventApp.jsx";
import { LayoutEffectApp } from "./components/UseLayoutEffect/impl-use-effect.jsx";
import { UseIdApp } from "./components/UseId/use-id-impl.jsx"
import { UseCallbackRefApp } from "./components/UseCallbackRef/UseCallbackRefApp.jsx";
import { UseImperativeApp } from "./components/UseImperativeHandler/UseImperativeApp.jsx";
import { UseDefferedApp } from "./components/UseDefferedValue/UseDefferedApp.jsx";
import { UseTransitionApp } from "./components/UseTransition/UseTransitionApp.jsx";


const App = () => {
  return(
    <React.StrictMode>
      <UseTransitionApp />
    </React.StrictMode>
  );
};

export default App ;
