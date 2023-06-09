import React, { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jon",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Barbecue"] });
  };

  console.log(pizza);

  return (
    <div>
      Game
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Game;
