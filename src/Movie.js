import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

//proptype is necessary for each prop used in the app

export default class Movie extends Component {
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
}