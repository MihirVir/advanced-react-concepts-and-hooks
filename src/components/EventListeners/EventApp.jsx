import { useState } from "react";
import { createPortal } from "react-dom";

export const EventApp = () => {
  const [show, setShow] = useState(false);
  /*
   * While using onClick Event
   *
   * When we click on the Alert to close it Firstly it prints "Inner Div" and 
   * then the "Outter Div" is printed. Because when we use onClick or onFocus 
   * they are going to be using bubbling phase. Which means they start triggering
   * from the very first element that was clicked which was inner div and then it is 
   * inside alert and then the first parent.
   *
   *
   * While using onClickCapture Event
   *
   * When we click on Alert the outter div gets printed first and then the Inner Div
   * this is because it uses top to bottom approach as the parent gets triggered first
   * than the child
   * */
  return (
    <>
      <div 
        onClickCapture = {() => console.log("Outter Div")} 
        style = {{ position: "absolute", marginTop: "200px" }}>
        <h1>Other Contents</h1>
        <button onClick = {() => setShow(true)}>Show Message</button>
        <Alert show = {show} onClose = {() => setShow(false)}>
          This is a sample Message
          <br />
          Click it to close here
        </Alert>
      </div>
    </>
  );
};

const Alert = ({ children, show, onClose }) => {
  if (!show) return;

  return createPortal(
    <>
      <div className = "alert" onClickCapture = {() => console.log("Inner Div")}>
        {children}
      </div>
    </>,
    document.body
  );
};
