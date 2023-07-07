import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import Collection from 'components/Collection/Collection';
import getter from 'utils/getter';

const Home = () => {
  const [movielist, setMovielist] = useState([]);
  useEffect(() => {
    getter('top_rated', true)
      .then(response => setMovielist(response))
      .catch(err => console.error(err));
  }, []);

  return <Collection data={movielist} />;
};
export default Home;
