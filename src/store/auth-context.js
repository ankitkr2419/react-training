import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  // let timer;

  const logginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    // setTimeout(() => {
    //   logoutHandler();
    // }, 9000);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    // clearTimeout(timer);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
