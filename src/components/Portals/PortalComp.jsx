import { useState } from "react";
import { createPortal } from "react-dom";

/*
 *
 * REACT PORTALS:
 *
 * It's a way to render children components into a DOM node that 
 * is outside the parent component's DOM hierarchy 
 *
 */

export const PortalComp = () => {
  const [show, setShow] = useState(false);

  /*
   * When we click on the alert it should not print the Outer Div console right?
   * but when we click on the contents of the Alert Component
   * The Alert Component closes and then prints Outer Div 
   * that is because React doesn't know where the Alert Component is actually placed
   *
   * */

  return (
    <div 
      onClick = {() => console.log("Outer Div")}
      style = {{position: "absolute", marginTop: "100px"}}>
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
  
  /*
   *
   * Using createPortal function we told react that
   * whatever we have in the param1 [jsx]
   * place that inside the document.body
   * 
   * createPortal function returns JSX thats why we are able 
   * to use it inside PortalComp
   * */
  return createPortal(
    <div style = {{cursor: "pointer"}} className = "alert" onClick = {onClose}>
      {children}
    </div>,
    document.body
  );
};

