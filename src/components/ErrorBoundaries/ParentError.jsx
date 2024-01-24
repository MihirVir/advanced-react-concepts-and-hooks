import {ChildError}  from "./ChildError.jsx";

export const ParentError = () => {
  return (
    <>
      <h1>This is parent component</h1>
      <ChildError>
        <h2>This is child component</h2>
      </ChildError>
    </>
  )
}
