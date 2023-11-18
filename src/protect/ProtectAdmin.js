import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectAdmin = ({ children }) => {
  const { auth } = useAuth();

  if (auth?.role !== "admin") {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default ProtectAdmin;
