import React from 'react';
import styles from './MovieInfo.module.css';

export default function MovieInfo({ movie }) {
  const releaseYear = movie.release_date.slice(0, 4);
  const filmScore = movie.vote_average * 10;
  const movieGenres = movie.genres.map(genre => genre.name);

  return (
    <div className={styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="a"
        width={280}
      ></img>
      <div className={styles.infoContainer}>
        <h2 className={styles.text}>
          {movie.original_title} ({releaseYear})
        </h2>
        <p className={styles.text}>User score: {filmScore}%</p>
        <h3 className={styles.text}>Overview</h3>
        <p className={styles.text}>{movie.overview}</p>
        <h3 className={styles.text}>Genres</h3>
        <p>{movieGenres.join(', ')}</p>
      </div>
    </div>
  );
}
