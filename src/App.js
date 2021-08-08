import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './components/AppBar/AppBar';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackCunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackCunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackCunkName: "MovieDetailsPage" */),
);

export default function App() {
  return (
    <div className={styles.container}>
      <AppBar />
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
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="*">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
