import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ token, children }) {
  const effectiveToken = token || localStorage.getItem("token");
  if (!effectiveToken) return <Navigate to="/login" replace />;
  return children;
}
