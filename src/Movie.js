import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
// we can use functional stateless components anytime when
// we are not using stat, refs and lifecycle funciton.
// In this movie component is an example of it so we can use
// instead a Movie class a Movie function (functional stateless components)


// `${POSTER_PATH}${movie.poster_path}` is string interpollation
// string interpollation allows to insert js variable into string(back tick and dollar sign)
const Movie = ({ movie }) => (
  <div>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
);

export default Movie;

Movie.propTypes = {
  // shape allows us to validate object with elements inside obj
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
