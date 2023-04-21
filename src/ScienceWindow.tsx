import React, { useState } from "react";

export default function ScienceWindow({
  player,
  setVisible,
  setSciencePoints,
}) {
  const [tablet, setTablet] = useState(0);

  const handleClick = () => {
    setVisible(false);
    setSciencePoints(tablet);
  };
  return (
    <div id="scienceWindow">
      <div id="windowContent">
        <h1>Calculateur de points Sciences pour {player.playerName}</h1>
        <div>
          <label htmlFor="tablet">Nombre de tablettes : {tablet}</label>
          <input
            type="range"
            name="tablet"
            id=""
            value={tablet}
            onChange={(e) => setTablet(+e.target.value)}
            min={0}
            max={4}
          />
        </div>
        <button onClick={() => handleClick()}>Close</button>
      </div>
    </div>
  );
}