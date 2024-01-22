import { forwardRef } from "react";

/* 
 *
 * Ref Forwarding:
 * 
 * In React, forwarding ref is a concept that refers to ability to pass
 * a `ref` from parent component down to the child component, allowing parent
 * to interact with child's DOM node directly
 *
 * */

const inputStyle = {
  padding: "1rem",
  fontSize: "1.04rem",
  borderRadius: ".25rem",
  border: "1px solid black",
  outline: "none"
};  


const CustomInput = (props, ref)=> {
  return <input ref = { ref } {...props} style = {inputStyle} />
};

export const Input = forwardRef(CustomInput);
