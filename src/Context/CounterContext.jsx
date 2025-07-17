import { createContext, useState } from "react";
import React from "react";

 export const CounterStore = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterStore.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </CounterStore.Provider>
  );
}

export default CounterProvider;
