import { useState, useEffect, useRef, useCallback } from "react";


/*
 *
 * Okay, so what's it doing is firstly rendering the JSX and then going
 * back to the useEffect to focus on the inputRef. As <input /> was only
 * visible when showInput was true it wasn't rendered and ignored by react
 * that's why it is throwing that nasty error as inputReft is null by default.
 *
 *
 * using UseCallBack
 * well it is simply checking if input is null right now then return else 
 * we need to focus on that input :)
 * */

export const UseCallbackRefApp = () => {
  const [showInput, setShowInput] = useState(false);

  const inputRef = useCallback((input) => {
    if (input === null) return;
    input.focus();
  }, []);



  return (
    <>
      <button onClick = {() => setShowInput(s => !s)}>
        Switch
      </button>
      {showInput && <input type = "text" ref = {inputRef} />}
    </>
  );
};
