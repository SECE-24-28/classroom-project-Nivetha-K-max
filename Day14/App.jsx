import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorage = () => setToken(localStorage.getItem("token"));
    const handleTokenExpired = () => {
      setToken(null);
      navigate("/login");
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener("tokenExpired", handleTokenExpired);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("tokenExpired", handleTokenExpired);
    };
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <div className="app-root">
      <Navbar token={token} onLogout={handleLogout} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Login onLogin={(t) => setToken(t)} />} />
          <Route path="/login" element={<Login onLogin={(t) => setToken(t)} />} />
          <Route path="/register" element={<Register onRegister={(t) => setToken(t)} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute token={token}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Login onLogin={() => setToken(localStorage.getItem("token"))} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
