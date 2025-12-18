import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ token, onLogout }) {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Link to={token ? "/dashboard" : "/login"} className="brand">Movie Watchlist</Link>
        <nav>
          {token ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <button className="btn btn-ghost" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
