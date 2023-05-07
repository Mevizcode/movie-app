import './App.css';
import MovieCard from './MovieCard';

const App = () => {
  return (
    <div className="App">
      <h1>Movie WebApp</h1>

      {/* Search bar */}
      <div className="search">
        <input 
          placeholder="Search for movies"
          value="Avatar"
          onChange={() => {}}
        />
        <img 
          src=""
          alt="search"
          onClick={() => {}}
        />
      </div>

      {/* container for movieCard Component */}
      <div className="container">
          <MovieCard />
      </div>
    </div>
  );
}

export default App;
