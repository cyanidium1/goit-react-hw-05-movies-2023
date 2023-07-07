import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import additionalGetter from 'utils/additionalGetter';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    additionalGetter(movieId, 'reviews')
      .then(response => setReviews(response.results))
      .catch(err => console.error(err));
  }, []);
  return (
    <ul>
      {reviews.length === 0 ? (
        <p>No revs</p>
      ) : (
        reviews.map(el => (
          <li key={el.id}>
            <span>{el?.author}</span>
            <span> at {el?.created_at}</span>
            <p>{el?.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
