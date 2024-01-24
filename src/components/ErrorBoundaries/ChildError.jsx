export const ChildError = ({children}) => {
  throw new Error("Error in child component");
  return (
    <>
      {children}
    </>
  );
};
