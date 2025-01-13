import { createContext, useContext } from "react";
import { userContext } from "./User.context";

export let NoteContext = createContext(null);
export default function NoteProvider({ children }) {
  let { token } = useContext(userContext);

  return <NoteContext.Provider value={{}}>{children}</NoteContext.Provider>;
}
