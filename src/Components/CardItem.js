import React, { Component } from 'react';

//follows the structure of App.js
class CardItem extends Component {
  render() {
    return (
      <li className="Cards"> 
      {/* 5. each card item which has a name and suit property */}
            <strong>{this.props.card.name}</strong> : {this.props.card.suit}
      </li>
    );
  }
}

//So we can use it in other files
export default CardItem;
