import { createContext, useState } from "react";

export let userContext = createContext(null);
export default function Userprovider({ children }) {
  let [token, setToken] = useState(localStorage.getItem("token"));
  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
  }
  return (
    <userContext.Provider value={{ token, setToken, logOut }}>
      {children}
    </userContext.Provider>
  );
}
