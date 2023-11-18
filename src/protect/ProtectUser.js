import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectUser = ({ children }) => {
  const { auth } = useAuth();

  if (auth?.role !== "user") {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default ProtectUser;
