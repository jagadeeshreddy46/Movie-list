import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        if (!res.ok) throw new Error("Failed to fetch popular movies");
        const data = await res.json();
        setPopularMovies(data.results || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  if (loading) return <div className="loading">Loading popular movies...</div>;

  if (error) return <div className="error">Error: {error}</div>;

  if (popularMovies.length === 0)
    return <div className="no-movies">No popular movies available.</div>;

  return (
    <>
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={500}
          interval={5000}
          infiniteLoop={true}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
        >
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="posterImage">
                <img
                  style={{ height: "500px", width: "100%" }}
                  src={
                    movie?.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                      : "https://via.placeholder.com/1280x720?text=No+Image"
                  }
                  alt={movie?.original_title || "Movie backdrop"}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title" style={{ fontSize: "2.5rem" }}>
                  {movie?.original_title}
                </div>
                <div className="posterImage__runtime">
                  {movie?.release_date || "Unknown Date"}
                  <span className="posterImage__rating">
                    {movie?.vote_average?.toFixed(1) || "N/A"}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie?.overview || "No description available"}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>

        <MovieList />
      </div>
    </>
  );
};

export default Home;
