import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RootLayout() {
  const { user } = useAuth();
  if (user == null) return <Navigate to="/login" />;

  return <Outlet />;
}