import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

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
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  }, []);
  return (
    <ul className={styles.list}>
      {cast.length === 0 ? (
        <p>No info</p>
      ) : (
        cast.map(el => (
          <li className={styles.item} key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${el?.profile_path}`}
              alt="pic"
              width="50"
              height="50"
            />
            <p>{el?.character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
