
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css";

const AddMovie = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Movie data:", movieData);
    navigate("/"); // Navigate back to dashboard
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="add-movie-container">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={movieData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            name="director"
            value={movieData.director}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            name="genre"
            value={movieData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="releaseYear">Release Year:</label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            value={movieData.releaseYear}
            onChange={handleChange}
            min="1900"
            max={new Date().getFullYear()}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea
            id="synopsis"
            name="synopsis"
            value={movieData.synopsis}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="posterUrl">Poster URL:</label>
          <input
            type="url"
            id="posterUrl"
            name="posterUrl"
            value={movieData.posterUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            Add Movie
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
