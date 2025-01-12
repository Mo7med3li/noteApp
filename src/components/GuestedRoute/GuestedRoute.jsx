import { useContext } from "react";
import { userContext } from "../../context/User.context";
import { Navigate } from "react-router-dom";

export default function GuestedRoute({ children }) {
  let { token } = useContext(userContext);
  if (token) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
