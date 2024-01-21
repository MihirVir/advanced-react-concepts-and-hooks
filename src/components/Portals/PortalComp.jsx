import { useState } from "react";
import { createPortal } from "react-dom";


export const PortalComp = () => {
  const [show, setShow] = useState(false);

  return (
    <div style = {{position: "absolute", marginTop: "100px"}}>
      <h1>Other Content</h1>
      <button onClick = {() => setShow(true)}> 
        Show Message
      </button>
      <Alert show = {show} onClose = {() => setShow(false)}>
        A sample message to show
        <br />
        Click it to close
      </Alert>
    </div>
  );
};

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <div style = {{cursor: "pointer"}} className = "alert" onClick = {onClose}>
      {children}
    </div>,
    document.body
  );
};
