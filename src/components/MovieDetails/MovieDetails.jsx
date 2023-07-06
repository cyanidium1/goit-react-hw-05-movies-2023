import React, { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/movies');

  const [full, setFull] = useState();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGE2YzA4YmYzNTFmY2Q4YWViMDRhOTQ3MmYxOWEyZSIsInN1YiI6IjY0YTM0MzkzZThkMDI4MDEzOTE2MWE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_uy0Y5amAn0DH7cfOOqT828mZRf10axAv84-OrLYlI',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setFull(response))
      .catch(err => console.error(err));
  }, []);

  console.log(backLink.current);
  return (
    <Suspense fallback={<div>Loading data</div>}>
      <div className={styles.box}>
        <div className={styles.flexbox}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${full?.poster_path}`}
            alt=""
            width="200"
          />
          <div>
            <Link to={backLink.current}>Back</Link>
            <h3>{full?.title}</h3>
            <p>{full?.vote_average}</p>
            <p>{full?.overview}</p>
          </div>{' '}
        </div>

        <ul className={styles.list}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading film</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default MovieDetails;
