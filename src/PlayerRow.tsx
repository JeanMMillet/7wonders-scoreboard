import { useState,useEffect } from "react";

export default function PlayerRow({player, players, index, setPlayers}) {
  
  const [playerName, setPlayerName] = useState("");
  const [militaryPoints, setMilitaryPoints] = useState(0);
  const [coinPoints, setCoinPoints] = useState(0);
  const [wonderPoints,setWonderPoints] = useState(0) 
  
  const [culturePoints, setCulturePoints] = useState(0);
  const [tradingPoints, setTradingPoints] = useState(0);
  const [sciencePoints, setSciencePoints] = useState(0);

  const [visible, setVisible] = useState(false);

  function handleScienceClick() {
    setVisible(true);
  }
  useEffect(() => {
    let updatePlayers = players.map((e:object, i:number) => {
      if (i === index) {
        return {
          ...player,
          playerName: playerName,
          militaryPoints: +militaryPoints,
          coinPoints: +coinPoints,
          culturePoints: +culturePoints,
          tradingPoints: +tradingPoints,
          score:
            militaryPoints + coinPoints + culturePoints + tradingPoints,
        };
      } else {
        return e;
      }
    });
    setPlayers(updatePlayers);
  }, [militaryPoints, coinPoints, culturePoints, tradingPoints, playerName]);

  return (
    <div>
     <input
            type="text"            
            className="playerName"
            placeholder="Nom du joueur"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        
          <input
            type="number"            
            className="militaryPoints"
            onChange={(e) => setMilitaryPoints(+e.target.value)}
            min={-6}
            max={18}
          />
      
          <input
            type="number"            
            className="coinPoints"
            onChange={(e) => setCoinPoints(+e.target.value)}
            min={0}
          />
           <input
            type="number"            
            className="tradingPoints"
            onChange={(e) => setWonderPoints(+e.target.value)}
            min={0}
          />
      
          <input
            type="number"            
            className="culturePoints"
            onChange={(e) => setCulturePoints(+e.target.value)}
            min={0}
          />
       
          <input
            type="number"            
            className="tradingPoints"
            onChange={(e) => setTradingPoints(+e.target.value)}
            min={0}
          />
      
          <input
            type="number"            
            className="sciencePoints"
            onClick={() => handleScienceClick()}
            readOnly
            min={0}
            value={sciencePoints}
          />
       
          <input type="number" className="score" readOnly={true} value={tradingPoints+culturePoints+coinPoints+militaryPoints+sciencePoints} />
    </div>
  )
         
}