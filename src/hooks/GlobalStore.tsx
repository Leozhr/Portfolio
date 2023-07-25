import React, { useState } from "react";

type StoreProps = {
  Active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<StoreProps>({
  Active: true,
  setActive: () => {},
});

export const GlobalStore = ({ children }: { children: React.ReactNode }) => {
  const [Active, setActive] = useState(true);

  return (
    <GlobalContext.Provider value={{ Active, setActive }}>
      {children}
    </GlobalContext.Provider>
  );
};