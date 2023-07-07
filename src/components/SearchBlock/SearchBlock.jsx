import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import Collection from 'components/Collection/Collection';
import Searchform from 'components/SearchForm/Searchform';
import getter from 'utils/getter';
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

  const handleSubmit = e => {
    e.preventDefault();
    if (filmName !== '') {
      getter(filmName, false)
        .then(response => setResults(response))
        .catch(err => console.error(err));
    }
  };

  return (
    <>
      <Searchform
        value={filmName}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
      <Collection data={results} location={location} />
    </>
  );
};

export default SearchBlock;
