import React from "react";

const Card = props => {
  return (
    <div>
      {props.member.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <h2>{member.email}</h2>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
