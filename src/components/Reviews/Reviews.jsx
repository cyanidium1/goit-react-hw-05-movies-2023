import { useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGE2YzA4YmYzNTFmY2Q4YWViMDRhOTQ3MmYxOWEyZSIsInN1YiI6IjY0YTM0MzkzZThkMDI4MDEzOTE2MWE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_uy0Y5amAn0DH7cfOOqT828mZRf10axAv84-OrLYlI',
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(setReviews(response.results)))
    .catch(err => console.error(err));

  return (
    <ul>
      {reviews.map(el => (
        <li key={el.id}>
          <span>{el?.author}</span>
          <span> at {el?.created_at}</span>
          <p>{el?.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
