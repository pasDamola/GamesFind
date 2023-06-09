import React, { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jon",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };
  return (
    <div>
      Game
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Game;
