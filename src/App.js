import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; //this is only needed in App.js
import Projects from './Components/Projects'

class App extends Component {
  render() {
    return (
      // can only have one div at the very top level
      <div className="App"> 
        My app
        <Projects test = " Hello World "/>
        
      </div>
    );
  }
}

export default App;
