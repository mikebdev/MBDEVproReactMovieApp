import MovieCard from "../components/MovieCard";
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"


function Home() {
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query input by the user
    const [movies, setMovies] = useState([]); // State to hold the list of movies fetched from the API
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);


    // const movies = [
    //     { id: 1, title: "Inception", year: "2010", url: "https://example.com/inception.jpg" },
    //     { id: 2, title: "The Dark Knight", year: "2008", url: "https://example.com/darkknight.jpg" },
    //     { id: 3, title: "Interstellar", year: "2014", url: "https://example.com/interstellar.jpg" },
    //     { id: 4, title: "The Matrix", year: "1999", url: "https://example.com/matrix.jpg" },
    //     { id: 5, title: "Pulp Fiction", year: "1994", url: "https://example.com/pulpfiction.jpg" }
    // ];

    // Function to handle search form submission
    const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;