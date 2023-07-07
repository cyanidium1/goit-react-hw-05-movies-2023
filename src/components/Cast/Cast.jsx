import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';
import additionalGetter from 'utils/additionalGetter';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    additionalGetter(movieId, 'credits').then(response =>
      setCast(response.cast)
    );
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
