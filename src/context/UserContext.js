// UserContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
