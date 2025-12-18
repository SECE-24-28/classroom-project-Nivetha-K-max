import React, { useEffect, useState } from "react";
import api from "../api/axios";
import MovieCard from "../components/MovieCard";

export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", genre: "", year: "", watched: false });

  const fetchMovies = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("Fetching movies...");
      const res = await api.get("/movies");
      console.log("Movies fetched:", res.data);
      const data = res.data;
      let list = [];
      if (Array.isArray(data)) list = data;
      else if (data && Array.isArray(data.movies)) list = data.movies;
      else if (data && Array.isArray(data.data)) list = data.data;
      setMovies(list);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError(err.response?.data?.message || "Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // try to hydrate from prefetched data to avoid visible loading flash
    try {
      const raw = sessionStorage.getItem("prefetchedMovies");
      if (raw) {
        const data = JSON.parse(raw);
        // backend may return { success, message, count, movies }
        const list = Array.isArray(data) ? data : (data.movies || []);
        setMovies(list || []);
        setLoading(false);
        // remove it after hydration
        sessionStorage.removeItem("prefetchedMovies");
        // then refresh in background to ensure fresh data
        fetchMovies();
        return;
      }
    } catch (e) {
      // ignore parse errors and fetch normally
    }

    fetchMovies();
  }, []);

  // Listen for login event to refetch immediately after auth
  useEffect(() => {
    const onLogin = (e) => {
      fetchMovies();
    };
    window.addEventListener("userLoggedIn", onLogin);
    return () => window.removeEventListener("userLoggedIn", onLogin);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.title.trim() || !form.genre.trim() || !form.year.trim()) {
      setError("Please complete all fields.");
      return;
    }
    setAdding(true);
    try {
      const payload = { title: form.title.trim(), genre: form.genre.trim(), year: form.year.trim(), watched: !!form.watched };
      const res = await api.post("/movies", payload);
      // normalize new movie from response
      const r = res.data;
      let newMovie = null;
      if (r && r._id) newMovie = r;
      else if (r && r.movie) newMovie = r.movie;
      else if (r && r.data && r.data._id) newMovie = r.data;
      else newMovie = r;
      setMovies((prev) => (newMovie ? [newMovie, ...prev] : prev));
      setForm({ title: "", genre: "", year: "", watched: false });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add movie.");
    } finally {
      setAdding(false);
    }
  };

  const handleToggle = async (id) => {
    // Optimistic UI update: flip watched locally first
    const movie = movies.find((m) => m._id === id);
    if (!movie) return;
    const previousMovies = movies;
    const toggled = { ...movie, watched: !movie.watched };
    setMovies((prev) => prev.map((m) => (m._id === id ? toggled : m)));

    try {
      const res = await api.put(`/movies/${id}`, { watched: toggled.watched });
      const r = res.data;
      let updated = null;
      if (r && r._id) updated = r;
      else if (r && r.movie) updated = r.movie;
      else if (r && r.data && r.data._id) updated = r.data;
      else updated = r;
      // ensure server canonical version is applied
      setMovies((prev) => prev.map((m) => (m._id === id ? (updated || m) : m)));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update movie.");
      // revert optimistic update
      setMovies(previousMovies);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/movies/${id}`);
      setMovies((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete movie.");
    }
  };

  return (
    <div className="dashboard">
      <div className="panel">
        <h2>Your Watchlist</h2>
        <form className="add-form" onSubmit={handleAdd}>
          {error && <div className="alert error">{error}</div>}
          <div className="fields">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
            <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" />
            <input name="year" value={form.year} onChange={handleChange} placeholder="Year" />
            <label className="checkbox-inline">
              <input name="watched" type="checkbox" checked={form.watched} onChange={handleChange} /> Watched
            </label>
            <button className="btn" type="submit" disabled={adding}>{adding ? "Adding..." : "Add Movie"}</button>
          </div>
        </form>
      </div>

      <div className="panel">
        {loading ? (
          <div className="center">Loading movies...</div>
        ) : movies.length === 0 ? (
          <div className="center empty">
            <p>No movies yet.</p>
            <p>Add your first movie using the form above.</p>
          </div>
        ) : (
          <div className="movies-sections">
            {/** Unwatched Section */}
            <div className="movies-section">
              <h3>⏳ Unwatched Movies</h3>
              {movies.filter((m) => !m.watched).length === 0 ? (
                <div className="muted">No unwatched movies</div>
              ) : (
                <div className="movies-grid">
                  {movies.filter((m) => !m.watched).map((movie) => (
                    <MovieCard key={movie._id} movie={movie} onToggle={handleToggle} onDelete={handleDelete} />
                  ))}
                </div>
              )}
            </div>

            {/** Watched Section */}
            <div className="movies-section">
              <h3>✅ Watched Movies</h3>
              {movies.filter((m) => m.watched).length === 0 ? (
                <div className="muted">No watched movies</div>
              ) : (
                <div className="movies-grid">
                  {movies.filter((m) => m.watched).map((movie) => (
                    <MovieCard key={movie._id} movie={movie} onToggle={handleToggle} onDelete={handleDelete} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
