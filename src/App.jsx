import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import SearchResults from "./components/SearchResults";  // Import this!
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MovieList />} />
        
        {/* Add this new route for search */}
        <Route path="search/:query" element={<SearchResults />} />
        
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
