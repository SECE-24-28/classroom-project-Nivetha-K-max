import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!email.trim() || !password) {
      setError("Please provide both email and password.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res.data.token || res.data;
      localStorage.setItem("token", token);
      onLogin && onLogin(token);
      // prefetch movies so dashboard can render instantly
      try {
        const moviesRes = await api.get("/movies");
        sessionStorage.setItem("prefetchedMovies", JSON.stringify(moviesRes.data || moviesRes));
      } catch (e) {
        // ignore prefetch errors
      }
      // notify other parts of the app that user logged in
      try {
        window.dispatchEvent(new CustomEvent("userLoggedIn", { detail: { token } }));
      } catch (e) {
        // ignore
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        {error && <div className="alert error">{error}</div>}
        <label>
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
        </label>
        <div className="form-actions">
          <button className="btn" type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
          <Link to="/register" className="btn btn-ghost">Create account</Link>
        </div>
      </form>
    </div>
  );
}
