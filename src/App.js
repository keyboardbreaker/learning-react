import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; //this is only needed in App.js
import Cards from './Components/Cards'

class App extends Component {
  constructor(){
    super();
    //we want to take this state and pass through <cards /> 
    //as a property
    this.state = {
      cards: [
        {
          name:'K'
        },
        {
          name:'Q'
        },
        {
          name:'J'
        },
        {
          name:'10'
        },
        {
          name:'9'
        },
        {
          name:'8'
        },
        {
          name:'7'
        },
        {
          name:'6'
        },
        {
          name:'5'
        },
        {
          name:'4'
        },
        {
          name:'3'
        },
        {
          name:'2'
        },
        {
          name:'A'
        }
      ]
    }
  }
  render() {
    return (
      // can only have one div at the very top level
      <div className="App"> 
        My app
        <Cards name = " Hello World "/>      
      </div>
    );
  }
}

export default App;
