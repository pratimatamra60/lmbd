import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';
// const movies is an array of objects
const movies = [{
  id: 1,
  title: 'Star Wars',
  desc: 'A space movie'
}, {
  id: 2,
  title: 'Spider Man',
  desc: 'A Marvel movie'
}, {
  id: 3,
  title: '36th Chamber of Shaolin'
}, {
  id: 4,
  title: '5 Deadly Venoms'
}
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} test={movie} 
        desc={movie.desc}/>)}
      </div>
    );
  }
}

export default App;