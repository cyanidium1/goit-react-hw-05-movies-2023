import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Collection.module.css';

const Collection = ({ data, location = [] }) => {
  return (
    <ul>
      {data.length === 0 ? (
        <p>No matches</p>
      ) : (
        data.map(el => (
          <li style={{ marginTop: '10px' }} key={el.id}>
            <Link
              className={styles.item}
              to={`/movies/${el.id}`}
              state={{ from: location }}
            >
              {el.title}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Collection;
