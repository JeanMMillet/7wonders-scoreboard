import { useState,useEffect } from "react";
import ScienceWindow from "./ScienceWindow";
import ButtonMinus from "./ButtonMinus"
import ButtonPlus from "./ButtonPlus";

export default function PlayerRow({player, players, index, setPlayers,setIsBabyloneBuilt,IsBabyloneBuilt}) {
  

  const [scienceCards,setScienceCards] = useState({wheel:0,tablet:0,compass:0,bonus:0})
  const [visible, setVisible] = useState(false);
  const [test,setTest] = useState({...player});
 

  function handleScienceClick() { 

    setVisible(true);

  }
  useEffect(() => {
    // Update the table of players after the change of any points
    let updatePlayers = players.map((e:object, i:number) => {
      if (i === index) {
        return {
          ...player,
          playerName: test.playerName,
          militaryPoints: test.militaryPoints,
          coinPoints: test.coinPoints,
          wonderPoints: test.wonderPoints,
          culturePoints: test.culturePoints,
          tradingPoints: test.tradingPoints,
          guildPoints: test.guildPoints,
          sciencePoints: test.sciencePoints,
          score:
            test.score,
          scienceCards: scienceCards,
          
        };
      } else {
        return e;
      }
    });
    setPlayers(updatePlayers);
    
  }, [test]);

  return (
    <div className="playerRow">
          <div>
            <input
            type="text"            
            className="playerName"
            name="playerName"
            placeholder="Nom du joueur"
            onChange={(e) => setTest({...test, [e.target.name]: e.target.value})}
          />
          </div>
          
         <div>
           <ButtonMinus setTest={setTest} test={test} />
          <input
            type="number"        
            className="militaryPoints"
            name="militaryPoints"
            value={test.militaryPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={-6}
            max={18}
          />
          <ButtonPlus setTest={setTest} test={test}/>
         </div>
         <div>
          <ButtonMinus setTest={setTest} test={test} />
          <input
            type="number"            
            className="coinPoints"
            name="coinPoints"
            value={test.coinPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={setTest} test={test}/>
         </div>
          
          
          <div>
             <ButtonMinus setTest={setTest} test={test} />
           <input
            type="number"            
            className="wonderPoints"
            name="wonderPoints"
            value={test.wonderPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={setTest} test={test}/>
          </div>
         
          <div>
            <ButtonMinus setTest={setTest} test={test} />
          <input
            type="number"            
            className="culturePoints"
            name="culturePoints"
            value={test.culturePoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={setTest} test={test}/>
          </div>
          
          <div>
            <ButtonMinus setTest={setTest} test={test} />
          <input
            type="number"            
            className="tradingPoints"
            name="tradingPoints"
            value={test.tradingPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={setTest} test={test}/>
          </div>

          

          <div className="input">
            <ButtonMinus setTest={setTest} test={test} />
            <input
            type="number"            
            className="guildPoints"
            name="guildPoints"
            value={test.guildPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
            />
          <ButtonPlus setTest={setTest} test={test}/>
          </div>
          
          <div>
             <input
            type="number"            
            className="sciencePoints"
            onClick={() => handleScienceClick()}
            readOnly
            min={0}
            value={test.sciencePoints}
          />
          </div>
      
         
        <div>
           <input 
          type="number" 
          className="score" 
          readOnly={true} 
          value={test.tradingPoints+test.culturePoints+test.wonderPoints+test.coinPoints+test.militaryPoints+test.sciencePoints+test.guildPoints} 
          />
          
        </div>
         
          {visible && <ScienceWindow 
            player={player}
            test={test}
            setTest={setTest} 
            setVisible={setVisible}             
            setScienceCards={setScienceCards}
            setIsBabyloneBuilt={setIsBabyloneBuilt}
            IsBabyloneBuilt={IsBabyloneBuilt}
            />
          }
    </div>
  )
         
}