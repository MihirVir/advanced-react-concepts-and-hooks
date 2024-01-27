import { useState, useRef, useImperativeHandle, forwardRef } from "react";

const textStyle = {
  padding: "1rem",
  borderRadius: ".5rem",
  marginLeft: ".2rem"
}

/*
const CustomInput = (props, ref) => {
  const inputRef = useRef();
  const inputRef2 = useRef();

  useImperativeHandle(ref, () => {
    return { input1: inputRef.current, input2: inputRef2.current } 
  });
  return (
    <>
      <input {...props}  ref = {inputRef} style = {textStyle} />
      <input {...props} ref = {inputRef2} style = {textStyle} />
    </>
  );
}; */

const CustomInput = (props, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => {
    return { value };
  },[value]);
  
  return (
    <>
      <input 
        {...props} 
        style = {textStyle} 
        type = "text" 
        value = {value}
        onChange = {e => setValue(e.target.value)}/> 
    </>
  );
};

export const Input = forwardRef(CustomInput);
