import React, { useState, useContext } from "react";
import useFecth from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("the matrix reloaded");
  const { loading, error, data: movies } = useFecth(`&s=${query}`);

  return (
    <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
