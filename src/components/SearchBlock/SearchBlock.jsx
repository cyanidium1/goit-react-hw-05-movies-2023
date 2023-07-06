import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
const SearchBlock = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('search') ?? '';
  const [results, setResults] = useState([]);

  const location = useLocation();

  const handleInput = evt => {
    evt.target.value === ''
      ? setSearchParams({})
      : setSearchParams({ search: evt.target.value });
  };

  useEffect(() => {
    if (filmName !== '') {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGE2YzA4YmYzNTFmY2Q4YWViMDRhOTQ3MmYxOWEyZSIsInN1YiI6IjY0YTM0MzkzZThkMDI4MDEzOTE2MWE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_uy0Y5amAn0DH7cfOOqT828mZRf10axAv84-OrLYlI',
        },
      };

      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${filmName}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then(response => response.json())
        .then(response => setResults(response.results))
        .catch(err => console.error(err));
    }
  }, [filmName]);

  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={filmName}
          onChange={handleInput}
        />
        {/* <button
          onClick={() => {
            setSearchParams({ a: 'kek' });
          }}
        >
          Set
        </button> */}
      </form>
      <ul>
        {results.length === 0 ? (
          <p>No matches</p>
        ) : (
          results.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={{ from: location }}>
                {el.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default SearchBlock;
