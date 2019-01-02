import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard";

const getMovies = (movies) => {
  return (
    <div className="outer-card">
      {
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      }
    </div>
  )
};

const MovieList = (props) => (
  <div>
    {getMovies(props.movies)}
  </div>
);

MovieList.defaultProps = {
  movies: [],
  openModal: null
};

MovieList.propTypes = {
  movies: PropTypes.array,
  openModal: PropTypes.func,
};

export default MovieList;