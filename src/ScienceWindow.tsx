import React, { useState } from "react";
import ScienceInput from "./ScienceInput";
import scienceScoreCalculation from "./ScienceScoreCalculator";

export default function ScienceWindow({
  player,
  setVisible,
  setScienceCards, 
  setIsBabyloneBuilt,
  IsBabyloneBuilt,
  test,
  setTest
}) {
  const [tablet, setTablet] = useState(player.scienceCards.tablet);
  const [wheel,setWheel] = useState(player.scienceCards.wheel);
  const [compass,setCompass] = useState(player.scienceCards.compass);
  const [wonderBonus,setWonderBonus] = useState(player.scienceCards.wonderBonus)
  const [guildBonus,setGuildBonus] = useState(player.scienceCards.guildBonus) 
  

  
  
  
  const handleCancelClick = () => {
    setVisible(false);
    
    // setSciencePoints(tablet+wheel+compass);
  };
  const handleCheck = (e:boolean) => {   
    if (e) {
      setWonderBonus(true);    
    }
    else {
      setWonderBonus(false);      
    }
  }

  const handleCalculClick = (tablet:number, wheel:number, compass:number,wonderBonus:boolean, guildBonus:boolean) => {
      let updatedValues = {wheel: wheel, tablet:tablet,compass:compass, wonderBonus:wonderBonus, guildBonus:guildBonus}
      setScienceCards((prevState) => ({...prevState,...updatedValues}))
      setTest({...test, sciencePoints:scienceScoreCalculation(tablet,wheel,compass,wonderBonus, guildBonus)})
      setVisible(false)
      if (wonderBonus || (IsBabyloneBuilt && player.scienceCards.bonus)) {
        setIsBabyloneBuilt(wonderBonus)
      }
      


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
          checked={wonderBonus}
          disabled={IsBabyloneBuilt && !player.scienceCards.bonus ? true : false} 
          onChange={(e) => handleCheck(e.target.checked)}/>
        </div>

        <div className="buttons">
          <button onClick={() => handleCancelClick()}>Cancel</button>
        <button onClick={() => handleCalculClick(tablet, wheel, compass,wonderBonus, guildBonus)}>Confirm</button>
        </div>
        
      </div>
    </div>
  );
}

