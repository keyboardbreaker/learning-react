import React, { Component } from 'react';
import CardItem from './CardItem';

//follows the structure of App.js
class Cards extends Component {
  render() {
    let cardItems;
    if(this.props.cards){
      cardItems = this.props.cards.map(card =>{
        // 3. Mapping through array of states, 
        //console.log(card);
        return(
          // 4. Outputting a CardItem component 
          <CardItem key={card.name} card ={card} />
        );
      });
    }

    //can now access the states from Cards class
    console.log(this.props)
    return (
      <div className="Cards"> 
          {cardItems}
      </div>
    );
  }
}

//So we can use it in other files
export default Cards;
