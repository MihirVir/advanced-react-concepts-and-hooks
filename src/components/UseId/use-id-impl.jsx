import {Form} from "./form.jsx";


/* 
 * When we click on the label of first form it focuses on the email field #1
 * When we click on the label of second form it focuses on the email field #2
 * thats because we have the same htmlFor = "email" for both of the input as we 
 * can't identify samse element with same id.
 *
 * */
export const UseIdApp = () => {
  return (
    <>
      <Form />
      <p>
        This is a long text 
      </p>
      <Form />
    </>
  );
};
