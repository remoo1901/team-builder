import React from "react";

const Card = props => {
 
  return (
    <div>
      {props.members.map(x => (
        <div key={x.id}>
          <h3>{x.name}</h3>
          <h3>{x.email}</h3>
          <h3>{x.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
