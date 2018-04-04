import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; //this is only needed in App.js
import Cards from './Components/Cards';
import StyledDiv from './StyledDiv.js';

class App extends Component {
  constructor(){
    super();
    //we want to take this state and pass through <cards /> 
    //as a property
    this.state = { //1. setting our state
      cards: [
        {
          name:'K',
          suit:'hearts'
        },
        {
          name:'Q',
          suit:'hearts'
        },
        {
          name:'J',
          suit:'hearts'
        },
        {
          name:'10',
          suit:'hearts'
        },
        {
          name:'9',
          suit:'hearts'
        },
        {
          name:'8',
          suit:'hearts'
        },
        {
          name:'7',
          suit:'hearts'
        },
        {
          name:'6',
          suit:'hearts'
        },
        {
          name:'5',
          suit:'hearts'
        },
        {
          name:'4',
          suit:'hearts'
        },
        {
          name:'3',
          suit:'hearts'
        },
        {
          name:'2',
          suit:'hearts'
        },
        {
          name:'A',
          suit:'hearts'
        }
      ]
    }
  } 

  render() {
    return (
      // can only have one div at the very top level
      <div className="App"> 
        My CARDS
        {/* 2. passing it through to cards as a property */}
        <Cards cards = {this.state.cards}/>      
        <StyledDiv />
      </div>
    );
  }
}

export default App;
