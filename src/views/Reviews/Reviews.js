import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as MoviesApi from '../../services/api-service';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    MoviesApi.getFilmReview(movieId).then(res => {
      if (res.results.length === 0) {
        return;
      }
      setReviews(res.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                {' '}
                <h4>Author: {review.author}</h4>
                <p className={styles.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
