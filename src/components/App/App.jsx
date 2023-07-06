// import Cast from 'components/Cast/Cast';
import Layout from 'components/Layout/Layout';
import MovieDetails from 'components/MovieDetails/MovieDetails';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import Reviews from 'components/Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
// import Search from 'pages/Search';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));
const Search = lazy(() => import('../../pages/Search'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="search" element={<Search />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
