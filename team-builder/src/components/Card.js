
import React from 'react';
import '../App.css';

const Card = props => {
  return (
    <div className="note-list">
      {props.cards.map(card =>
      <div className="card" key={card.id}>
        <h3>{card.name}</h3>
        <h4>{card.email}</h4>
        <h4>{card.role}</h4>
      </div>

      )}
    </div>
  );
};

export default Card;