import React from "react"
import { ErrorHandler } from "./components/ErrorBoundaries/error.jsx";
import { ParentError } from "./components/ErrorBoundaries/ParentError.jsx"
const App = () => {
  return(
    <React.StrictMode>
      <ErrorHandler fallback = {<h1>Something went wrong</h1>}>
        <ParentError />
      </ErrorHandler>
    </React.StrictMode>
  );
}

export default App ;
