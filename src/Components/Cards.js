import React, { Component } from 'react';

//follows the structure of App.js
class Cards extends Component {
  render() {
    return (
      <div className="Cards"> 
            My Cards
            {this.props.name}
      </div>
    );
  }
}

//So we can use it in other files
export default Cards;
