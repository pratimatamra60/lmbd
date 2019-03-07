import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
// we can use functional stateless components anytime when
// we are not using stat, refs and lifecycle funciton.
// In this movie component is an example of it so we can use
// instead a Movie class a Movie function (functional stateless components)


// `${POSTER_PATH}${movie.poster_path}` is string interpollation
// string interpollation allows to insert js variable into string(back tick and dollar sign)
const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

Movie.propTypes = {
  // shape allows us to validate object with elements inside obj
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
