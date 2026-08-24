import { Navigate, Outlet } from "react-router";
import { UAS } from "../global/Hooks";

export const ProtectedRoute = () => {
    const isAuth = UAS((state) => state.auth.isAuth);

    return isAuth ? 
        <Outlet /> : 
        <Navigate to="/login" replace />;
};


