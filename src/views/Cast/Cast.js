import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as MoviesApi from '../../services/api-service';
import styles from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    MoviesApi.getFilmCast(movieId).then(res => setActors(res.cast));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt={actor.name}
                  width={80}
                ></img>
                {actor.name}
                <br />
                <p className={styles.text}>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
      )
    </>
  );
}
