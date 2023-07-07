async function getter(params, toprated) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGE2YzA4YmYzNTFmY2Q4YWViMDRhOTQ3MmYxOWEyZSIsInN1YiI6IjY0YTM0MzkzZThkMDI4MDEzOTE2MWE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_uy0Y5amAn0DH7cfOOqT828mZRf10axAv84-OrLYlI',
    },
  };

  return fetch(
    toprated
      ? `https://api.themoviedb.org/3/movie/${params}?language=en-US&page=1`
      : `https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
}

export default getter;
