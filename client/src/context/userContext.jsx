import React, { createContext} from "react";
import useLocalStorage from "../hooks/useLocal";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user",null);

  const data = { user,setUser }

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
};