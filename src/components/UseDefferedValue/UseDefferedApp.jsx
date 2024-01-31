import React, { useState, useDeferredValue } from "react";
import {HeavyComponent} from "./heavy.jsx";

export const UseDefferedApp = () => {
  const [val, setVal] = useState("");
  
  const keyword = useDeferredValue(val); 
  
  console.log("Keyword", val);
  console.log("Deferred Keyword", keyword);

  return (
    <>
      <input value = {val} onChange = {e => setVal(e.target.value)} />
      <HeavyComponent keyword = {keyword} />
    </>
  );
};

