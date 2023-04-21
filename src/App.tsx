import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerRow from './PlayerRow'

function App() {

 class Player {
  
  playerName:string;
  militaryPoints:number;
  coinPoints:number;
  wonderPoints:number;
  tradingPoints:number;
  culturePoints:number;
  sciencePoints:number;
  id;
  constructor(id:number) {
    
    this.playerName = "";
    this.militaryPoints = 0 ;
    this.coinPoints = 0;
    this.wonderPoints=0;
    this.tradingPoints = 0;
    this.culturePoints = 0;
    this.sciencePoints = 0;
    this.id = id;
  }
}

const initialPlayers = [new Player(1),new Player(2), new Player(3)]

const [players, setPlayers] = useState(initialPlayers);

function handleClickWinner() {
  // Compare the score of each player and return the winner name and his/her score
  // Create a new array for comparison to avoid rerender of PlayerRow
  let sortPlayers:any= [];
  players.map((e) => sortPlayers.push(e));
  sortPlayers.sort((a, b) => b.score - a.score);
  console.log(sortPlayers, players);
  console.log(
    `Vainqueur ${sortPlayers[0].playerName} avec ${sortPlayers[0].score} points`
  );
}

  return (
    <div className="App">
      <h1>7WONDERS SCOREBOARD</h1>
      <div>
         { players.map((e,index) => <PlayerRow key={e.id} player={e} players={players} setPlayers={setPlayers}index={index} />)}
      </div>
     
      <button
        onClick={() => setPlayers([...players, new Player(players.length + 1)])}
        disabled={players.length < 7 ? false : true}
      >
        Ajouter un joueur
      </button>
      <button
        onClick={() => setPlayers(players.slice(0, players.length - 1))}
        disabled={players.length > 3 ? false : true}
      >
        Supprimer un joueur
      </button>
      <button onClick={() => handleClickWinner()}>Vainqueur ?</button>
    </div>
  )
}

export default App
