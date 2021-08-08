import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  useHistory,
  Switch,
} from 'react-router-dom';
import * as MoviesApi from '../services/api-service';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Loader from 'react-loader-spinner';
import styles from './views.module.css';

const Cast = lazy(() => import('./Cast' /* webpackCunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackCunkName: "Reviews" */),
);

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (movieId) {
      MoviesApi.getFilmInfo(movieId).then(setMovie);
    }
  }, [movieId]);

  const onBackBtnClick = () => {
    history.goBack();
  };

  return (
    <>
      <button className={styles.btn} type="button" onClick={onBackBtnClick}>
        Go back
      </button>
      {movie && <MovieInfo movie={movie} />}
      <h3>Additional information:</h3>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="#235bc2"
            height={80}
            width={80}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>

          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
