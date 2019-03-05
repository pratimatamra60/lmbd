import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const welcome = "Welcome to First react app";

class App extends Component {  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text ="introduction to props"/>
          <p>
            this is a first react app
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    // do some js before return
    const { text } = this.props; 
    return (
      <h1 className="App-title">{ text }</h1>
      // passing data from parent class to child class
      //<h1 className="App-title">{this.props.text}</h1>
    );
  }
} 
export default App; 
