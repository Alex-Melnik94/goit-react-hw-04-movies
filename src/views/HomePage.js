import { useState, useEffect } from 'react';
import * as MoviesApi from '../services/api-service';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    MoviesApi.getTrendingFilms().then(res => setMovies(res.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
