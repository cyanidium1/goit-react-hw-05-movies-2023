import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (filmName !== '') {
      getter(filmName, false)
        .then(response => setResults(response))
        .catch(err => console.error(err));
    }
  }, [filmName]);

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target.elements.search.value;
    input === '' ? setSearchParams({}) : setSearchParams({ search: input });
  };

  return (
    <>
      <Searchform value={filmName} handleSubmit={handleSubmit} />
      <Collection data={results} location={location} />
    </>
  );
};

export default SearchBlock;
