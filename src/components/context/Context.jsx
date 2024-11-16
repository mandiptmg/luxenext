import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [active, setActive] = useState(false);


  return (
    <AppContext.Provider value={{ play, setPlay, active, setActive }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};
