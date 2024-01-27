import { useRef } from "react";
import { Input } from "./input";


const btnStyle = {
  padding: "1rem",
  backgroundColor: "blue",
  border: 'none',
  outline: "none",
  marginLeft: ".5rem",
  borderRadius: ".25rem",
  color: "white"
}

/* 
 *
 * It allows to customize the instance value that is exposed when using 
 * forwardRef. It's useful when we particularly need to control what values 
 * or functions are accessible on the ref object that it passed to the parent 
 * component 
 * */
export const UseImperativeApp = () => {
  const inputRef = useRef(null);
  
  return (
    <>
      <Input type = "text" ref = {inputRef} />
      <button style = {btnStyle} onClick = {() => console.log(inputRef.current.value)}>
       focus 
      </button>
    </>
  );
};
