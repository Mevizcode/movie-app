import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import { useEffect, useState }  from 'react';
const apiUrl = process.env.REACT_APP_API_URL;

// Main Component
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

// Initializes the component to display movies with the title "Avatar"
useEffect(() => {
    searchMovies('Avatar');
}, [])

const searchMovies = async (title) => {
    await fetch(`${apiUrl}&s=${title}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setMovies(data.Search);
      })
      .catch(error => {
        console.error(error);
      })
}

  return (
    <div className="app">
      <h1>Movie WebApp</h1>

      {/* Search bar */}
      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/*  check & render a list of MovieCard */}
      {
        movies?.length > 0 
        ? (
         <div className="container">
          {
            movies.map((movie) => (
              <MovieCard movie={movie} />
          ))}
         </div>
        ) : (
          <div className="empty">
              <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
