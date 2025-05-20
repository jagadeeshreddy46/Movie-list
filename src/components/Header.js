import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="IMDB Logo"
          />
        </Link>

        <button
          className="header__menuButton"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <NavLink
          to="/movies/popular"
          className="header__link"
          onClick={() => setMenuOpen(false)}
        >
          Popular🔥
        </NavLink>
        <NavLink
          to="/movies/top_rated"
          className="header__link"
          onClick={() => setMenuOpen(false)}
        >
          Top Rated👌
        </NavLink>
        <NavLink
          to="/movies/upcoming"
          className="header__link"
          onClick={() => setMenuOpen(false)}
        >
          Upcoming😊
        </NavLink>

        <form className="header__searchForm" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="header__searchInput"
          />
          <button type="submit" className="header__searchButton">
            <Search size={20} />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
