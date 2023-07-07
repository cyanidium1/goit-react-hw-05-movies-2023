import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Movies.module.css';
import Collection from 'components/Collection/Collection';
import getter from 'utils/getter';

const Movies = () => {
  const [movielist, setMovielist] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getter('top_rated', true)
      .then(response => setMovielist(response))
      .catch(err => console.error(err));
  }, []);

  return <Collection data={movielist} location={location} />;
};
export default Movies;
