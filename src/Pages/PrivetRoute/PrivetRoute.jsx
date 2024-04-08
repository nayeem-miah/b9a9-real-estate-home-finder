/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;
