import { Navigate } from "react-router-dom";

const CheckAccess = ({ children }) => {
  const auth = localStorage.getItem("accessToken");
  if (!auth) return <Navigate to="/login" />;
  return <>{children}</>;
};
export default CheckAccess;
