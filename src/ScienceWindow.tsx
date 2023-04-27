import React, { useState } from "react";
import ScienceInput from "./ScienceInput";
import scienceScoreCalculation from "./ScienceScoreCalculator";

export default function ScienceWindow({
  player,
  setVisible,
  setSciencePoints,
  setScienceCards, 
  setIsBabyloneBuilt,
  IsBabyloneBuilt
}) {
  const [tablet, setTablet] = useState(player.scienceCards.tablet);
  const [wheel,setWheel] = useState(player.scienceCards.wheel);
  const [compass,setCompass] = useState(player.scienceCards.compass);
  const [bonus,setBonus] = useState(player.scienceCards.bonus)

  
  
  
  const handleCancelClick = () => {
    setVisible(false);
    
    // setSciencePoints(tablet+wheel+compass);
  };
  const handleCheck = (e:boolean) => {   
    if (e) {
      setBonus(true);    
    }
    else {
      setBonus(false);      
    }
  }

  const handleCalculClick = (tablet:number, wheel:number, compass:number,bonus:boolean) => {
      let updatedValues = {wheel: wheel, tablet:tablet,compass:compass, bonus:bonus}
      setScienceCards(prevState => ({...prevState,...updatedValues}))
      setSciencePoints(scienceScoreCalculation(tablet,wheel,compass,bonus))
      setVisible(false)
      setIsBabyloneBuilt(bonus)


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
        <input 
          type="checkbox" 
          name="wonderBonus" 
          id="" 
          checked={bonus}
          disabled={IsBabyloneBuilt && !player.scienceCards.bonus ? true : false} 
          onChange={(e) => handleCheck(e.target.checked)}/>
        </div>

        <div className="buttons">
          <button onClick={() => handleCancelClick()}>Cancel</button>
        <button onClick={() => handleCalculClick(tablet, wheel, compass,bonus)}>Confirm</button>
        </div>
        
      </div>
    </div>
  );
}