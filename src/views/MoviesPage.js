import { useState, useEffect } from 'react';
import * as MoviesApi from '../services/api-service';
import Searchbar from '../components/Searchbar/Searchbar';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const [films, setFilms] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    MoviesApi.getFilmByQuery(searchQuery).then(res => {
      setFilms(res.results);
    });
  }, [searchQuery]);

  const handleFormSubmit = query => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {films && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
