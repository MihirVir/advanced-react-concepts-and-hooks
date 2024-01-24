import { useRef } from "react";
import {Input} from "./input.jsx"

const buttonStyle = {
  padding: "1rem",
  fontSize: "1.05rem",
  borderRadius: ".5rem",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  outline: "none"
};

export const RefComponent = () => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <>
      <form onSubmit = {submitHandler}>
        <Input ref = {inputRef}/>
        <button type = "submit" style = {buttonStyle}>
          Submit 
        </button>
      </form>
    </>
  );
};

