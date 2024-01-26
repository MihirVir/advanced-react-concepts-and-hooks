import { useId, useState } from "react";


/*
 *
 * using id = Math.random()
 *
 * In case we have some SSR. Whenever the client refreshes we are going to have different
 * ID and that is not going to work. Because id that will generate on server will not be 
 * same on the client.
 *
 *
 * Using useId 
 **/

export const Form = () => {
  const [email, setEmail] = useState("");
   
  const id = useId();
  return (
    <>
      <div>
        <label htmlFor = {`${id}-email`}>Email</label>
        <input 
          id = {`${id}-email`}
          name = "email"
          value = {email}
          onChange = {e => setEmail(e.target.value)} />
        <label htmlFor = {`${id}-name`}>Name</label>
        <input id = {`${id}-name`} type = 'text'/>
      </div>
    </>
  );
};
