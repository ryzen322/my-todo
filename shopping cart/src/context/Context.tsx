import React, { createContext } from "react";
import useContextStore, { ContextInter } from "../hooks/useContext";
export interface layoutPropos {
  children: React.ReactNode;
}

export const StoreContext = createContext<ContextInter | null>(null);

const Context = ({ children }: layoutPropos) => {
  const { store, addStore } = useContextStore() as ContextInter;
  return (
    <StoreContext.Provider value={{ store, addStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Context;
