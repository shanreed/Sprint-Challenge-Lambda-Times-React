import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const CardsContainerDiv = styled.div`
display: flex;
justify-content: space-evenly;
align-items: none;
flex-direction: row;
width: 100%;
margin-top: 16px;
flex-wrap: wrap;`

const Cards = props => {
  const cardItems = props.cards.map((card) =>
  <Card card = {card}/>
  )
  return (
    <CardsContainerDiv>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {cardItems}
    </CardsContainerDiv>
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

