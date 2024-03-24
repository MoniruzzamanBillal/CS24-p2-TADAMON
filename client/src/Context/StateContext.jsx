import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [test, setTest] = useState("testing state context ....");

  const stateValues = { test };

  return (
    <StateContext.Provider value={stateValues}>
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => {
  return useContext(StateContext);
};
