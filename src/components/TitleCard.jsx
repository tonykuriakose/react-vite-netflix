import React from "react";
import cards_data from "../assets/cards/Cards_data";

const TitleCard = () => {
  return (
    <div>
      <h2>Popular on Netflix</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {cards_data.map((card, index) => {
          return (
            <div key={index} style={{ textAlign: "center" }}>
              <img src={card.image} alt={card.name} style={{ width: "150px", height: "200px", objectFit: "cover" }} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
