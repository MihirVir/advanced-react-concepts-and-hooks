import { useState, useRef, useEffect, useLayoutEffect } from "react";


export const LayoutEffectApp = () => {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);
   

  /*
   *
   * Issue Using useEffect in toolTip 
   * 
   * In this useEffect we see that default position of tooltip is 0 
   * 
   * Lets assume its our first render of code:
   * 
   * It runs useEffect and then it comes down and render everything with 
   * top to 0. But when we click on the show button useEffect is fired again
   * whenever useEffect detects change in it tries to render everything first 
   * the component or app is going to render the JSX and after rendering everything 
   * the app tells useEffect hey I am done rendering everything go do ur stuff 
   * then useEffect calls the getBoudingClientRect stuff and change the value of top 
   * to bottom + 30 
   * 
   * 
   * Using UselayoutEffect Hook 
   * It calculates the bottom + 30 first and then renders the JSX.Don't use it everywhere
   * because it can give some UI lags 
   * */
  useLayoutEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  },[show]);
  
  // helping to view the transition from top 0 to bottom + 30 
  const now = performance.now();

  while (now > performance.now() - 100) {
    // Do something
  }

  return (
    <>
      <button ref = {buttonRef} onClick = {() => setShow(s => !s)}>
        Show
      </button>
      {show && (
        <div 
          className = "tooltip"
          style = {{ position: "absolute", top: `${top}px` }}>
          Some text...
        </div>
      )}
    </>
  );
};  
