import React ,{useEffect} from "react"

export const HeavyComponent = React.memo(({ keyword }) => {
    const init = performance.now();
    while (init > performance.now() - 200) {}
  return (
    <>
      <h2>I am a slow component</h2>
      {keyword}
    </>
  );
});


