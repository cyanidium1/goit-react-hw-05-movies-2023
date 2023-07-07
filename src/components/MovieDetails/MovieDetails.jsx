import React, { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import getFull from 'utils/getFull';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/movies');

  const [full, setFull] = useState();

  useEffect(() => {
    getFull(movieId)
      .then(response => setFull(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <Suspense fallback={<div>Loading data</div>}>
      <div className={styles.box}>
        <div className={styles.flexbox}>
          <img
            src={
              full?.poster_path === null
                ? 'https://gdr.one/simg/200x500/5094bd/fff?text=film'
                : `https://image.tmdb.org/t/p/w500/${full?.poster_path}`
            }
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
