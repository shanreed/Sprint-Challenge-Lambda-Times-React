import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  const cardItems = props.cards.map( (card) =>
  <Card card = {card}/>
  )
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {cardItems}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    author: PropTypes.string,
    img:PropTypes.string
  })

}


export default Cards;

