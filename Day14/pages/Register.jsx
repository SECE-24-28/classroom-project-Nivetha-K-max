import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!name.trim() || !email.trim() || !password) {
      setError("All fields are required.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await api.post("/auth/register", { name, email, password });
      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
        onRegister && onRegister(token);
        // prefetch movies so dashboard can render instantly
        try {
          const moviesRes = await api.get("/movies");
          sessionStorage.setItem("prefetchedMovies", JSON.stringify(moviesRes.data || moviesRes));
        } catch (e) {
          // ignore
        }
        try {
          window.dispatchEvent(new CustomEvent("userLoggedIn", { detail: { token } }));
        } catch (e) {}
        navigate("/dashboard");
      } else {
        setSuccessMsg("Registration successful. Please login.");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        {error && <div className="alert error">{error}</div>}
        {successMsg && <div className="alert success">{successMsg}</div>}
        <label>
          <span>Name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" />
        </label>
        <div className="form-actions">
          <button className="btn" type="submit" disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
          <Link to="/login" className="btn btn-ghost">Have an account?</Link>
        </div>
      </form>
    </div>
  );
}
