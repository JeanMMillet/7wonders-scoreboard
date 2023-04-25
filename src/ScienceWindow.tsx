import React, { useState } from "react";
import ScienceInput from "./ScienceInput";

export default function ScienceWindow({
  player,
  setVisible,
  setSciencePoints,
}) {
  const [tablet, setTablet] = useState(0);
  const [wheel,setWheel] = useState(0);
  const [compass,setCompass] = useState(0) 
  
  const handleClick = () => {
    setVisible(false);
    setSciencePoints(tablet+wheel+compass);
  };
  return (
    <div id="scienceWindow">
      <div id="windowContent">
        <h1>Calculateur de points Sciences pour {player.playerName}</h1>
        <div>
          <ScienceInput cardNumber={tablet} setCardNumber={setTablet} cardName={"Tablette"} />
          <ScienceInput cardNumber={wheel} setCardNumber={setWheel} cardName={"Roue"} />
          <ScienceInput cardNumber={compass} setCardNumber={setCompass} cardName={"Compas"} />
        </div>
        
        <button onClick={() => handleClick()}>Close</button>
      </div>
    </div>
  );
}