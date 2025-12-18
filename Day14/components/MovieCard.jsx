import React, { useState } from "react";

export default function MovieCard({ movie, onToggle, onDelete }) {
  const [loadingToggle, setLoadingToggle] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleToggle = async () => {
    setLoadingToggle(true);
    try {
      await onToggle(movie._id);
    } finally {
      setLoadingToggle(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Delete \"${movie.title}\"?`)) return;
    setLoadingDelete(true);
    try {
      await onDelete(movie._id);
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <div className={`movie-card ${movie.watched ? "watched" : ""}`}>
      <div className="movie-main">
        <h3>{movie.title}</h3>
        <p className="muted">{movie.genre} • {movie.year}</p>
      </div>
      <div className="movie-actions">
        <button className="btn small" onClick={handleToggle} disabled={loadingToggle}>
          {loadingToggle ? "..." : movie.watched ? "Mark Unwatched" : "Mark Watched"}
        </button>
        <button className="btn danger small" onClick={handleDelete} disabled={loadingDelete}>
          {loadingDelete ? "..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
