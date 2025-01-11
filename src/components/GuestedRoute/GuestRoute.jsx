import { useContext } from "react";
import { userContext } from "../../context/User.context";
import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  let { token } = useContext(userContext);
  if (!token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
