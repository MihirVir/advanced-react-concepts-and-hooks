import { useState } from "react";
import { Counter } from "./Counter.jsx";



/*
 * Keys:
 *
 * Everytime the key of a component gets changed react says of 
 * time to rerender this component
 * */

/*
 *
 * If we have same component <Counter /> under the same parent 
 * when we switch from changeShirts change to true the Counter
 * state in <Counter /> will not change as react will view it as 
 * the same <Counter /> is placed inside the same parent so nothing
 * has changed
 *
 * Solution #1
 * 
 * We can have Different parents for both <Counter />
 *
 * Solution #2
 *
 * We can have two different keys for <Counter /> as it will see it 
 * as a different component. react wont persist the state of the <Counter /> 
 **/

export const CounterApp = () => {
  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <div>
      {changeShirts ? (
        <>
          <span>
            Shirts count: 
          </span>
          <Counter key = "shirt"/> {" "}
        </>
      ) : (
        <>
          <span>Count Shoes</span>
          <Counter key = "shoe"/> {" "}
        </>
      )}
      <br />
      <input type = "number" key = {changeShirts ? "shorts" : "shoes"}/>
      <br />
      <button onClick = {() => setChangeShirts((s) => !s)}>
        Switch
      </button>
    </div>
  )
}
