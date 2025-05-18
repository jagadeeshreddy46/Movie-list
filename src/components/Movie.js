import React, { useEffect, useState, useCallback } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const { id } = useParams();

  const getData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setLoading(false);
    }
  }, [id]);

  const fetchTrailer = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  }, [id]);

  useEffect(() => {
    getData();
    fetchTrailer();
    window.scrollTo(0, 0);
  }, [getData, fetchTrailer]);

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  const synopsisText = currentMovieDetail.overview || "No overview available";
  const maxSynopsisLength = 250;
  const isLongSynopsis = synopsisText.length > maxSynopsisLength;
  const displaySynopsis = showFullSynopsis
    ? synopsisText
    : synopsisText.slice(0, maxSynopsisLength) + (isLongSynopsis ? "..." : "");

  return (
    <div className="movie">
      <div className="movie__intro">
        {currentMovieDetail.backdrop_path ? (
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`}
            alt={currentMovieDetail.original_title || "Movie Backdrop"}
          />
        ) : (
          <div className="movie__backdrop--placeholder">No Backdrop Available</div>
        )}
      </div>

      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            {currentMovieDetail.poster_path ? (
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`}
                alt={currentMovieDetail.original_title || "Movie Poster"}
              />
            ) : (
              <div className="movie__poster--placeholder">No Poster Available</div>
            )}
          </div>
        </div>

        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <h2 className="movie__name">
              {currentMovieDetail.original_title || "Unknown Title"}
            </h2>
            <p className="movie__tagline">
              {currentMovieDetail.tagline || "No Tagline Available"}
            </p>
            <div className="movie__info">
              <span className="movie__rating">
                ⭐ {currentMovieDetail.vote_average} / 10 ({currentMovieDetail.vote_count} votes)
              </span>
              <span className="movie__runtime">{currentMovieDetail.runtime} mins</span>
              <span className="movie__releaseDate">
                Release Date: {currentMovieDetail.release_date}
              </span>
            </div>
            <div className="movie__genres">
              {currentMovieDetail.genres &&
                currentMovieDetail.genres.map((genre) => (
                  <span key={genre.id} className="movie__genre">
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="movie__detailRightBottom">
            <h3 className="synopsisText">Synopsis</h3>
            <p className="synopsisContent">
              {displaySynopsis}
              {isLongSynopsis && (
                <span
                  className="synopsisToggle"
                  onClick={() => setShowFullSynopsis(!showFullSynopsis)}
                >
                  {showFullSynopsis ? " Show Less" : " Show More"}
                </span>
              )}
            </p>

            {trailerUrl ? (
              <a
                href={trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="watchNowButton"
              >
                🎥 Watch Trailer
              </a>
            ) : (
              <button disabled className="watchNowButton disabled">
                Trailer Not Available
              </button>
            )}
          </div>

          <div className="movie__production">
            <h3 className="productionText">Production Companies</h3>
            <div className="movie__productionLogos">
              {currentMovieDetail.production_companies &&
                currentMovieDetail.production_companies.map((company) => (
                  <span key={company.id} className="movie__productionCompany">
                    {company.logo_path ? (
                      <img
                        className="movie__productionCompanyLogo"
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                      />
                    ) : (
                      company.name
                    )}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
