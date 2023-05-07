import React from "react";
import { StylesCard } from "./StyleCards";

const Cards = ({ agent }) => {
  return (
    <StylesCard className="StylesCard">
      <figure>
        <img src={agent.image} alt={agent.name} />
      </figure>
      <div className="cardname">
      <h3>{agent.name}</h3>
      </div>
    </StylesCard>
  );
};

export default Cards;
