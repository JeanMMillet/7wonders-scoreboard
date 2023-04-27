import React, { useState } from "react";
import ScienceInput from "./ScienceInput";
import scienceScoreCalculation from "./ScienceScoreCalculator";

export default function ScienceWindow({
  player,
  setVisible,
  setSciencePoints,
}) {
  const [tablet, setTablet] = useState(0);
  const [wheel,setWheel] = useState(0);
  const [compass,setCompass] = useState(0);
  const [bonus,setBonus] = useState(0)

  
  
  
  const handleCancelClick = () => {
    setVisible(false);
    
    // setSciencePoints(tablet+wheel+compass);
  };
  const handleCheck = (e:boolean) => {
   
    if (e) {
      setBonus(1);
    }
    else {
      setBonus(0);
    }
 

  }
  const handleCalculClick = (tablet:number, wheel:number, compass:number,bonus:number) => {
      setSciencePoints(scienceScoreCalculation(tablet,wheel,compass,bonus))
      setVisible(false)
  }
  return (
    <div id="scienceWindow">
      <div id="windowContent">
        <h1>Calculateur de points Sciences pour {player.playerName}</h1>
        <div>
          <ScienceInput cardNumber={tablet} setCardNumber={setTablet} cardName={"Tablette"} />
          <ScienceInput cardNumber={wheel} setCardNumber={setWheel} cardName={"Roue"} />
          <ScienceInput cardNumber={compass} setCardNumber={setCompass} cardName={"Compas"} />          
        </div>

        <div className="boni"> 
        <label htmlFor="wonderBonus">Babylone construite ?</label>
        <input type="checkbox" name="wonderBonus" id="" onChange={(e) => handleCheck(e.target.checked)}/>
        </div>

        <div className="buttons">
          <button onClick={() => handleCancelClick()}>Cancel</button>
        <button onClick={() => handleCalculClick(tablet, wheel, compass,bonus)}>Confirm</button>
        </div>
        
      </div>
    </div>
  );
}