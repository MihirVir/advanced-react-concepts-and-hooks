import { useState, useTransition } from "react";


/* 
 *
 * Issue: when we click on Book Reviews <Reviews /> component it takes 
 * ton of time to load the data becuase of fake slow down due to that 
 * when we try to load any other component like <Cover /> while the 
 * <Reviews /> component is loading, <Cover /> will render after the entire 
 * <Reviews /> component is rendered.
 *
 * */

const Cover = () => {
  return (
    <>
      <h1>This is Cover Page</h1>
    </>
  );
};

const Writer = () => {
  return (
    <>
      <h1>This is Writer Page</h1>
    </>
  );
};

const Reviews = () => {
  return (
    <>
      <div>
        <ul>
          {
            Array(300)
              .fill("")
              .map((_, i) => (
                <Review key = {i} index = {i} />
              ))
          }
        </ul>
      </div>
    </>
  )
};

const Review = ({ index }) => {
  const init = performance.now();
  // fake slow down 
  while (init > performance.now() - 3) {}
  return <li>Review #{index}</li>
}

export const UseTransitionApp = () => {
  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec) => {
    startTransition(() => {
      setSection(sec); 
    });

  }

  return (
    <>
      <button onClick = {() => sectionHandler("Cover")}>
        Book Cover 
      </button>
      <button onClick = {() => sectionHandler("Reviews")}>
        Book Reviews
      </button>
      <button onClick = {() => sectionHandler("Writer")}>
        Book Writer 
      </button>
      {isPending && "Loading..."}
      { section === "Cover" ? (
          <Cover />
        ) : section === "Reviews" ? (
          <Reviews />
        ) : (
          <Writer />
        )}
    </>
  );
};
