import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [movielist, setMovielist] = useState([]);
  const location = useLocation();
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
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options
    )
      .then(response => response.json())
      .then(response => setMovielist(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {movielist.map(el => (
        <li key={el.id}>
          <Link
            className={styles.link}
            to={`/movies/${el.id}`}
            state={{ from: location }}
          >
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Movies;
