import React from "react";
import { Navigate, Outlet } from "react-router";
import { UAS } from "../global/Hooks";

export const ProtectedRoute = () => {
    const isAuthenticated = UAS((state) => state.auth.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};


