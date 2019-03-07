import React from 'react';
import PropTypes from 'prop-types';

// we can use functional stateless components anytime when
// we are not using stat, refs and lifecycle funciton.
// In this movie component is an example of it so we can use
// instead a Movie class a Movie function (functional stateless components)

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
  </div>
);

export default Movie;

Movie.propTypes = {
  // shape allows us to validate object with elements inside obj
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// proptype is necessary for each prop used in the app

/* export default class Movie extends Component {
  static propTypes = {
    //shape allows us to validate object with elements inside obj
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }
  render() {
    return (
      <div>
        <h3>{this.props.test.title}</h3>

      </div>
    )
  }
} */
