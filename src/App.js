import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//const welcome = "Welcome to First react app";

class App extends Component { 

   submit = () => {
     console.log(this.text.value );
     console.log(this.email.value );
     
   }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text ="introduction to props" />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            ref={(input) => this.text = input}>
            Learn React
          </a>
<input type="text" ref={(input) => this.text = input} />
<input type="email" ref={(input) => this.email = input} />
        <button onClick={this.submit}> show value</button>
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
